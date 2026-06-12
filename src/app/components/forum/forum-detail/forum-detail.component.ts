import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ForumService } from '../../../services/forum.service';
import { MessageService } from '../../../services/message.service';
import {
  ForumInterface,
  getForumResponse,
  PrivateForumUser,
} from 'app/interfaces/forum.interface';
import { MessageInterface } from 'app/interfaces/message';
import { CommonModule, DatePipe } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface ForumUserInfo {
  id: number;
  role: string | null;
  roles?: string[];
}

@Component({
  selector: 'app-forum-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DatePipe, RouterLink, TranslatePipe],
  templateUrl: './forum-detail.component.html',
  styleUrl: './forum-detail.component.css',
})
/**
 * Componente Angular de Rolverse para forum detail.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class ForumDetailComponent {
  @ViewChild('messageFileInput') messageFileInput?: ElementRef<HTMLInputElement>;

  forumId!: number;
  forum!: ForumInterface;
  messages: MessageInterface[] = [];
  userInfo: ForumUserInfo | null = null;

  messageForm!: FormGroup;
  editMessageForm!: FormGroup;
  editForumForm!: FormGroup;
  selectedImage: File | null = null;
  previewImage: string | null = null;
  editingMessage: MessageInterface | null = null;
  selectedEditImage: File | null = null;
  editPreviewImage: string | null = null;
  inviteEmail = '';
  selectedUserToInvite: PrivateForumUser | null = null;
  inviteMessage = '';
  inviteError = '';
  inviteSearchMessage = '';
  foundUsers: PrivateForumUser[] = [];
  inviteLoading = false;
  searchLoading = false;
  privacyUpdating = false;
  privacyMessage = '';
  privacyError = '';
  editingForum = false;
  editForumSaving = false;
  editForumError = '';
  private inviteSearchTimer: ReturnType<typeof setTimeout> | null = null;

  private apiBase = environment.apiUrl;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    this.forumId = Number(this.route.snapshot.paramMap.get('id'));
    this.initForm();

    const token = localStorage.getItem('token');
    if (token) {
      this.userInfo = jwtDecode(token) as ForumUserInfo;
    }

    if (this.forumId) {
      this.getForumDetails();
      this.getMessages();
    }
  }

  /** Gestiona la accion initForm dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  initForm(): void {
    this.messageForm = this.fb.group({
      text: ['', [Validators.maxLength(1000)]],
      image: [null],
    });
    this.editMessageForm = this.fb.group({
      text: ['', [Validators.maxLength(1000)]],
      image: [null],
    });
    this.editForumForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(180)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  get canSubmitMessage(): boolean {
    const text = (this.messageForm?.get('text')?.value || '').trim();
    return !!this.messageForm?.valid && (!!text || !!this.selectedImage);
  }

  get canSubmitEditMessage(): boolean {
    const text = (this.editMessageForm?.get('text')?.value || '').trim();
    return (
      !!this.editMessageForm?.valid &&
      (!!text || !!this.selectedEditImage || !!this.editingMessage?.image_path)
    );
  }

  get canInviteUsers(): boolean {
    if (!this.forum || this.forum.visibility !== 'private') {
      return false;
    }

    return this.canManageForumPrivacy();
  }

  /** Gestiona la accion canManageForumPrivacy dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canManageForumPrivacy(): boolean {
    if (!this.userInfo || !this.forum) {
      return false;
    }

    return (
      this.isCurrentUserAdmin() ||
      Number(this.forum.user_id) === Number(this.userInfo.id)
    );
  }

  /** Gestiona la accion canEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canEditForum(): boolean {
    return this.canManageForumPrivacy();
  }

  /** Gestiona la accion openEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  openEditForum(): void {
    if (!this.forum) {
      return;
    }

    this.editingForum = true;
    this.editForumError = '';
    this.editForumForm.reset({
      title: this.forum.title || '',
      description: this.forum.description || '',
    });
  }

  /** Gestiona la accion closeEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  closeEditForum(): void {
    this.editingForum = false;
    this.editForumSaving = false;
    this.editForumError = '';
  }

  /** Gestiona la accion saveEditForum dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  saveEditForum(): void {
    if (!this.forum || this.editForumForm.invalid || this.editForumSaving) {
      this.editForumError = 'Titulo y descripcion son obligatorios.';
      return;
    }

    const title = String(this.editForumForm.value.title || '').trim();
    const description = String(this.editForumForm.value.description || '').trim();

    if (!title || !description) {
      this.editForumError = 'Titulo y descripcion son obligatorios.';
      return;
    }

    this.editForumSaving = true;
    this.editForumError = '';

    this.forumService
      .updateForum(this.forum.id!, {
        title,
        description,
        visibility: this.forum.visibility || 'public',
      })
      .subscribe({
        next: (response) => {
          this.forum = response.data || {
            ...this.forum,
            title,
            description,
          };
          this.closeEditForum();
        },
        error: (error) => {
          this.editForumError =
            error.error?.message || 'No se pudo editar el foro.';
          this.editForumSaving = false;
        },
        complete: () => {
          this.editForumSaving = false;
        },
      });
  }

  /** Gestiona la accion changeForumVisibility dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  changeForumVisibility(visibility: 'public' | 'private'): void {
    if (!this.forum || this.forum.visibility === visibility || this.privacyUpdating) {
      return;
    }

    this.privacyUpdating = true;
    this.privacyMessage = '';
    this.privacyError = '';

    this.forumService.updateForumVisibility(this.forum.id!, visibility).subscribe({
      next: (response) => {
        this.forum = response.forum || response.data || this.forum;
        this.privacyMessage = response.message || 'Privacidad actualizada correctamente.';

        if (this.forum.visibility !== 'private') {
          this.resetInviteState();
        }
      },
      error: (error) => {
        this.privacyError =
          error.error?.message || 'No se pudo cambiar la privacidad del foro.';
        this.privacyUpdating = false;
      },
      complete: () => {
        this.privacyUpdating = false;
      },
    });
  }

  /** Gestiona la accion onImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (!file) {
      this.selectedImage = null;
      this.previewImage = null;
      this.messageForm.patchValue({ image: null });
      return;
    }

    this.selectedImage = file;
    this.messageForm.patchValue({ image: file });

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** Gestiona la accion createMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  createMessage(): void {
    if (!this.canSubmitMessage) {
      return;
    }

    const text = (this.messageForm.value.text || '').trim();
    const formData = new FormData();
    formData.append('forum_id', this.forumId.toString());
    formData.append('text', text);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.messageService.createMessage(formData).subscribe({
      next: () => {
        this.resetMessageForm();
        this.getMessages();
      },
      error: (err) => {
        console.error('Error al crear mensaje:', err);
      },
    });
  }

  /** Gestiona la accion startEditMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  startEditMessage(message: MessageInterface): void {
    this.editingMessage = message;
    this.selectedEditImage = null;
    this.editPreviewImage = null;
    this.editMessageForm.reset({
      text: message.text || '',
      image: null,
    });
  }

  /** Gestiona la accion cancelEditMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  cancelEditMessage(): void {
    this.editingMessage = null;
    this.selectedEditImage = null;
    this.editPreviewImage = null;
    this.editMessageForm.reset({ text: '', image: null });
  }

  /** Gestiona la accion onEditImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onEditImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (!file) {
      this.selectedEditImage = null;
      this.editPreviewImage = null;
      this.editMessageForm.patchValue({ image: null });
      return;
    }

    this.selectedEditImage = file;
    this.editMessageForm.patchValue({ image: file });

    const reader = new FileReader();
    reader.onload = () => {
      this.editPreviewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** Gestiona la accion saveEditMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  saveEditMessage(): void {
    if (!this.editingMessage || !this.canSubmitEditMessage) {
      return;
    }

    const formData = new FormData();
    formData.append('text', (this.editMessageForm.value.text || '').trim());
    if (this.selectedEditImage) {
      formData.append('image', this.selectedEditImage);
    }

    this.messageService.updateMessage(this.editingMessage.id, formData).subscribe({
      next: (response: any) => {
        const updatedMessage = response.data;
        if (updatedMessage) {
          this.messages = this.messages.map((message) =>
            message.id === updatedMessage.id ? updatedMessage : message
          );
        }
        this.cancelEditMessage();
      },
      error: (error) => {
        console.error('Error editando mensaje:', error);
      },
    });
  }

  /** Gestiona la accion resetMessageForm dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  resetMessageForm(): void {
    this.messageForm.reset({ text: '', image: null });
    this.selectedImage = null;
    this.previewImage = null;
    if (this.messageFileInput?.nativeElement) {
      this.messageFileInput.nativeElement.value = '';
    }
  }

  /** Gestiona la accion getForumDetails dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  getForumDetails(): void {
    this.forumService.getForumById(this.forumId).subscribe({
      next: (response: getForumResponse) => {
        this.forum = response.data!;
      },
      error: (error) => {
        console.error('Error fetching forum details:', error);
      },
    });
  }

  /** Gestiona la accion getMessages dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  getMessages(): void {
    this.messageService.getAllMessages(this.forumId).subscribe({
      next: (response: any) => {
        this.messages = response.data;
      },
      error: (error) => {
        console.error('Error fetching messages:', error);
      },
    });
  }

  /** Gestiona la accion searchUsers dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  searchUsers(): void {
    const email = this.inviteEmail.trim();

    if (!email) {
      this.inviteError = 'Introduce un email para buscar.';
      return;
    }

    this.searchLoading = true;
    this.inviteError = '';
    this.inviteMessage = '';
    this.inviteSearchMessage = '';
    this.selectedUserToInvite = null;
    this.foundUsers = [];

    this.forumService.searchPrivateForumUsers(this.forumId, email).subscribe({
      next: (response) => {
        this.foundUsers = response.data || [];
        if (this.foundUsers.length === 0) {
          this.inviteSearchMessage =
            'No existe ningun usuario registrado con ese email. Busca un usuario valido.';
        }
      },
      error: (error) => {
        this.inviteSearchMessage =
          error.error?.message ||
          'No existe ningun usuario registrado con ese email. Busca un usuario valido.';
        this.searchLoading = false;
      },
      complete: () => {
        this.searchLoading = false;
      },
    });
  }

  /** Gestiona la accion onInviteEmailInput dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onInviteEmailInput(value: string): void {
    this.inviteEmail = value;
    this.selectedUserToInvite = null;
    this.inviteMessage = '';

    if (this.inviteSearchTimer) {
      clearTimeout(this.inviteSearchTimer);
    }

    if (value.trim().length < 3) {
      this.foundUsers = [];
      this.inviteSearchMessage = '';
      return;
    }

    this.inviteSearchTimer = setTimeout(() => {
      this.searchUsers();
    }, 300);
  }

  /** Gestiona la accion selectUserToInvite dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  selectUserToInvite(user: PrivateForumUser): void {
    this.selectedUserToInvite = user;
    this.inviteEmail = user.email;
    this.foundUsers = [];
    this.inviteSearchMessage = '';
    this.inviteError = '';
  }

  /** Gestiona la accion inviteSelectedUser dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  inviteSelectedUser(): void {
    if (!this.selectedUserToInvite) {
      this.inviteError = 'Selecciona un usuario valido para invitar.';
      return;
    }

    this.inviteLoading = true;
    this.inviteError = '';
    this.inviteMessage = '';

    this.forumService.inviteUserToPrivateForum(this.forumId, this.selectedUserToInvite.email).subscribe({
      next: (response) => {
        this.inviteMessage =
          response.message || 'Invitacion enviada correctamente.';
        this.inviteEmail = '';
        this.selectedUserToInvite = null;
        this.foundUsers = [];
      },
      error: (error) => {
        this.inviteError =
          error.error?.message || 'No se pudo enviar la invitacion.';
        this.inviteLoading = false;
      },
      complete: () => {
        this.inviteLoading = false;
      },
    });
  }

  private resetInviteState(): void {
    this.inviteEmail = '';
    this.selectedUserToInvite = null;
    this.inviteMessage = '';
    this.inviteError = '';
    this.inviteSearchMessage = '';
    this.foundUsers = [];
    this.inviteLoading = false;
    this.searchLoading = false;
  }

  /** Gestiona la accion getUploadUrl dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  getUploadUrl(path: string | null | undefined): string {
    if (!path) {
      return '';
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.apiBase}${path.startsWith('/') ? path : `/${path}`}`;
  }

  /** Gestiona la accion deleteMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  deleteMessage(messageId: number): void {
    this.messageService.deleteMessage(messageId).subscribe({
      next: () => {
        this.messages = this.messages.filter((message) => message.id !== messageId);
      },
      error: (error) => {
        console.error('Error eliminando mensaje:', error);
      },
    });
  }

  /** Gestiona la accion canDeleteMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canDeleteMessage(message: MessageInterface): boolean {
    if (!this.userInfo) {
      return false;
    }

    return (
      this.isCurrentUserAdmin() ||
      Number(message.user_id) === Number(this.userInfo.id)
    );
  }

  /** Gestiona la accion canEditMessage dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  canEditMessage(message: MessageInterface): boolean {
    return this.canDeleteMessage(message);
  }

  private isCurrentUserAdmin(): boolean {
    return (
      this.userInfo?.role === 'admin' ||
      !!this.userInfo?.roles?.includes('admin')
    );
  }
}
