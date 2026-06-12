import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { ChatbotResponse, ChatbotService } from '../../../services/chatbot.service';
import { TranslateService } from '../../../services/translate.service';

type ChatbotMode = 'text' | 'image';
type ChatbotSender = 'bot' | 'user';

interface ChatbotMessage {
  sender: ChatbotSender;
  content: string;
  imageUrl?: string;
  downloadable?: boolean;
  error?: boolean;
}

@Component({
  selector: 'app-chatbot-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './chatbot-widget.component.html',
  styleUrl: './chatbot-widget.component.css',
})
/**
 * Widget flotante del chatbot Gandalf.
 * Mantiene historial solo en memoria, valida limites locales y delega en backend.
 */
export class ChatbotWidgetComponent {
  @ViewChild('messagesPanel') private messagesPanel?: ElementRef<HTMLDivElement>;

  readonly maxCharacters = 1000;
  readonly maxUserMessages = 30;
  readonly allowedImageTypes = ['image/png', 'image/jpeg', 'image/webp'];
  readonly maxImageSize = 5 * 1024 * 1024;

  isOpen = false;
  isLoading = false;
  responseMode: ChatbotMode = 'text';
  userInput = '';
  userMessagesSent = 0;
  messages: ChatbotMessage[] = [];
  selectedImage?: File;
  selectedImagePreview?: string;
  validationMessage = '';

  constructor(
    private chatbotService: ChatbotService,
    public translateService: TranslateService,
  ) {}

  get charactersLeft(): number {
    return this.maxCharacters - this.userInput.length;
  }

  get messagesLeft(): number {
    return this.maxUserMessages - this.userMessagesSent;
  }

  get limitReached(): boolean {
    return this.messagesLeft <= 0;
  }

  /** Gestiona la accion openChat dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  openChat(): void {
    this.isOpen = true;
    this.resetChat();
  }

  /** Gestiona la accion closeChat dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  closeChat(): void {
    this.isOpen = false;
    this.resetChat();
  }

  /** Gestiona la accion resetChat dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  resetChat(): void {
    this.userInput = '';
    this.userMessagesSent = 0;
    this.validationMessage = '';
    this.removeImage();
    this.messages = [
      {
        sender: 'bot',
        content: this.getInitialMessage(),
      },
    ];
    this.scrollToBottom();
  }

  /** Gestiona la accion setResponseMode dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setResponseMode(mode: ChatbotMode): void {
    this.responseMode = mode;
    this.validationMessage = '';
  }

  /** Gestiona la accion onInputChange dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onInputChange(): void {
    if (this.userInput.length > this.maxCharacters) {
      this.userInput = this.userInput.slice(0, this.maxCharacters);
    }
  }

  /** Gestiona la accion onImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';

    if (!file) {
      return;
    }

    if (file.type.startsWith('video/')) {
      this.validationMessage = this.translateService.translate('CHATBOT.NO_VIDEO');
      return;
    }

    if (file.type.startsWith('audio/')) {
      this.validationMessage = this.translateService.translate('CHATBOT.NO_AUDIO');
      return;
    }

    if (!this.allowedImageTypes.includes(file.type)) {
      this.validationMessage = this.translateService.translate('CHATBOT.ONLY_IMAGES');
      return;
    }

    if (file.size > this.maxImageSize) {
      this.validationMessage = this.translateService.translate('CHATBOT.IMAGE_TOO_LARGE');
      return;
    }

    this.selectedImage = file;
    this.validationMessage = '';

    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImagePreview = String(reader.result);
    };
    reader.readAsDataURL(file);
  }

  /** Gestiona la accion removeImage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  removeImage(): void {
    this.selectedImage = undefined;
    this.selectedImagePreview = undefined;
  }

  /** Gestiona la accion sendMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  sendMessage(): void {
    const text = this.userInput.trim();

    if (this.isLoading || this.limitReached) {
      return;
    }

    if (this.userInput.length > this.maxCharacters) {
      this.validationMessage = this.translateService.translate('CHATBOT.TEXT_TOO_LONG');
      return;
    }

    if (!text && !this.selectedImage) {
      this.validationMessage = this.translateService.translate('CHATBOT.EMPTY_MESSAGE');
      return;
    }

    if (this.responseMode === 'image' && !text) {
      this.validationMessage = this.translateService.translate('CHATBOT.IMAGE_PROMPT_REQUIRED');
      return;
    }

    const imagePreview = this.selectedImagePreview;
    const imageFile = this.selectedImage;
    const formData = new FormData();
    formData.append(this.responseMode === 'image' ? 'prompt' : 'message', text);
    formData.append('language', this.translateService.currentLang);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    this.messages.push({
      sender: 'user',
      content: text,
      imageUrl: imagePreview,
    });

    this.userInput = '';
    this.removeImage();
    this.validationMessage = '';
    this.userMessagesSent += 1;
    this.isLoading = true;
    this.scrollToBottom();

    const request$ =
      this.responseMode === 'image'
        ? this.chatbotService.generateImage(formData)
        : this.chatbotService.sendTextMessage(formData);

    request$
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => this.addBotResponse(response),
        error: (error) => {
          const content = this.getRequestFallbackMessage();
          this.userMessagesSent = Math.max(0, this.userMessagesSent - 1);
          this.messages.push({ sender: 'bot', content, error: true });
          this.scrollToBottom();
        },
      });
  }

  /** Devuelve errores de usuario con tono rolero sin exponer detalles tecnicos. */
  private getRequestFallbackMessage(): string {
    if (this.responseMode === 'image') {
      return this.translateService.currentLang === 'en'
        ? 'I could not summon my visual arts at this moment, little rascal. Try a simpler description or try again later.'
        : 'No he podido invocar mis artes visuales en este momento, peque\u00f1o brib\u00f3n. Prueba con una descripci\u00f3n m\u00e1s sencilla o int\u00e9ntalo m\u00e1s tarde.';
    }

    return this.translateService.currentLang === 'en'
      ? 'My staff has failed for a moment. Try again with a simpler request.'
      : 'Mi bast\u00f3n ha fallado por un momento. Prueba de nuevo con una petici\u00f3n m\u00e1s sencilla.';
  }

  private addBotResponse(response: ChatbotResponse): void {
    const generatedImageUrl = response.imageBase64
      ? 'data:image/png;base64,' + response.imageBase64
      : response.imageUrl;

    this.messages.push({
      sender: 'bot',
      content: response.content,
      imageUrl: generatedImageUrl,
      downloadable: response.type === 'image' && Boolean(generatedImageUrl),
    });
    this.scrollToBottom();
  }

  private getInitialMessage(): string {
    if (this.translateService.currentLang === 'en') {
      return 'Hello cabin boy, welcome to Rolverse, where your dreams may come true... I am Gandalf, a wise wizard, and I am here to help you. Remember that when you close the chat, tab, or window, all conversations will be lost. Do not forget it, little rascal! How can I help you?';
    }

    return 'Hola Grumete, bienvenido a Rolverse donde tus sueños se harán realidad.... Soy Gandalf, un mago sabio y estoy aquí para ayudarte, recuerda que al cerrar el chat o cerrar la pestaña o ventana se perderán todas las conversaciones, recuerda no olvidarlo pequeño bribón!! ¿En qué puedo ayudarte?';
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const panel = this.messagesPanel?.nativeElement;
      if (panel) {
        panel.scrollTop = panel.scrollHeight;
      }
    });
  }
}
