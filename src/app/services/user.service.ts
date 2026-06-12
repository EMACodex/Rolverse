import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  personalUserResponse,
  profileImageResponse,
} from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de perfil de usuario.
 * Reune datos personales, contenido propio, avatar y cambio de contrasena.
 */
export class UserService {

  private apiURL = `${environment.apiUrl}/user`;

  constructor(
    private http: HttpClient,
  ) { }

  /** Obtiene datos publicos/privados del usuario segun permisos del backend. */
  getUserById(id: number): Observable<personalUserResponse> {
    return this.http.get<personalUserResponse>(`${this.apiURL}/${id}`);
  }

  /** Carga resumen de foros, noticias y partidas creadas por el usuario actual. */
  getOwnContent(): Observable<any> {
    return this.http.get(`${this.apiURL}/me/content`);
  }

  /** Metodo del servicio que encapsula la operacion updateProfileImage sin exponer detalles del backend al componente. */
  updateProfileImage(data: FormData): Observable<profileImageResponse> {
    return this.http.put<profileImageResponse>(
      `${this.apiURL}/profile-image`,
      data
    );
  }

  changePassword(payload: {
    currentPassword: string;
    newPassword: string;
  }): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      `${this.apiURL}/change-password`,
      payload
    );
  }
}
