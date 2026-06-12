import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * Servicio encargado de enviar los mensajes del formulario de contacto
 * al backend configurado para el entorno actual.
 */
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  /**
   * Envia una solicitud de contacto con los datos introducidos por el usuario.
   */
  sendContactForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, data);
  }
}
