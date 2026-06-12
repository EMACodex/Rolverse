import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de mensajes de foro.
 * Encapsula lectura, creacion, edicion y borrado de mensajes con adjuntos.
 */
export class MessageService {

  private apiURL = `${environment.apiUrl}/message`;

  constructor(
    private http: HttpClient
  ) { }

  /** Obtiene todos los mensajes visibles de un foro concreto. */
  getAllMessages(forumId: number) {
    return this.http.get(`${this.apiURL}/all/${forumId}`);
  }

  /** Metodo del servicio que encapsula la operacion getLastMessagesFromUser sin exponer detalles del backend al componente. */
  getLastMessagesFromUser(userId: number) {
    return this.http.get(`${this.apiURL}/last/${userId}`);
  }

  /** Metodo del servicio que encapsula la operacion createMessage sin exponer detalles del backend al componente. */
  createMessage(data: FormData) {
    return this.http.post(`${this.apiURL}/new`, data);
  }

  /** Metodo del servicio que encapsula la operacion updateMessage sin exponer detalles del backend al componente. */
  updateMessage(messageId: number, data: FormData) {
    return this.http.put(`${this.apiURL}/${messageId}`, data);
  }

  /** Metodo del servicio que encapsula la operacion deleteMessage sin exponer detalles del backend al componente. */
  deleteMessage(messageId: number) {
    return this.http.delete(`${this.apiURL}/${messageId}`);
  }

}


