import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ChatbotResponse {
  type: 'text' | 'image';
  content: string;
  imageUrl?: string;
  imageBase64?: string;
}

/**
 * Servicio HTTP del chatbot Gandalf.
 * Centraliza las llamadas protegidas al backend para respuestas de texto e imagen.
 */
@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private readonly apiUrl = environment.apiUrl + '/chatbot';

  constructor(private http: HttpClient) {}

  /** Envia una peticion de texto, opcionalmente con imagen de referencia. */
  sendTextMessage(formData: FormData): Observable<ChatbotResponse> {
    return this.http.post<ChatbotResponse>(this.apiUrl + '/message', formData);
  }

  /** Solicita al backend la generacion de una imagen a partir del prompt actual. */
  generateImage(formData: FormData): Observable<ChatbotResponse> {
    return this.http.post<ChatbotResponse>(this.apiUrl + '/image', formData);
  }
}
