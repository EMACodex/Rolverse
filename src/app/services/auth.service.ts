import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  LoginCredentials,
  Response,
  RegisterCredentials,
  DecodedToken,
  tokenData,
} from '../interfaces/auth.interface';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
/**
 * Servicio central de autenticacion.
 * Encapsula login, registro, recuperacion de contrasena y lectura segura del JWT.
 */
export class AuthService {
  private apiURL = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Envia las credenciales al backend configurado por environment.apiUrl.
   * No registra contrasenas ni tokens en consola.
   */
  login(credentials: LoginCredentials): Observable<Response> {
    return this.http.post<Response>(`${this.apiURL}/login`, credentials);
  }

  /** Registra un usuario nuevo usando el endpoint existente del backend. */
  register(credentials: RegisterCredentials): Observable<Response> {
    return this.http.post<Response>(`${this.apiURL}/register`, credentials);
  }

  /** Metodo del servicio que encapsula la operacion isAuth sin exponer detalles del backend al componente. */
  isAuth(): boolean {
    return this.isLoggedIn();
  }

  /** Metodo del servicio que encapsula la operacion isLoggedIn sin exponer detalles del backend al componente. */
  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  /** Metodo del servicio que encapsula la operacion getToken sin exponer detalles del backend al componente. */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /** Cierra la sesion local eliminando el JWT guardado en el navegador. */
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  /** Metodo del servicio que encapsula la operacion sendMailRecoversPass sin exponer detalles del backend al componente. */
  sendMailRecoversPass(email: string): Observable<Response> {
    return this.http.post<Response>(`${this.apiURL}/sendrecover`, { email });
  }

  /** Metodo del servicio que encapsula la operacion resetPass sin exponer detalles del backend al componente. */
  resetPass(token: string, password: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiURL}/recover`, {
      token,
      password,
    });
  }

  /**
   * Decodifica el JWT almacenado y descarta tokens expirados o corruptos.
   * El backend sigue siendo la fuente de verdad para permisos reales.
   */
  getCurrentUser(): DecodedToken | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const user = jwtDecode(token) as DecodedToken;
      const expiresAt = user.exp ? user.exp * 1000 : null;

      if (expiresAt && expiresAt < Date.now()) {
        localStorage.removeItem('token');
        return null;
      }

      return user;
    } catch (e) {
      console.error('Error decodificando el token', e);
      return null;
    }
  }

  /** Metodo del servicio que encapsula la operacion getUserRole sin exponer detalles del backend al componente. */
  getUserRole(): string | null {
    const user = this.getCurrentUser();

    if (!user) return null;

    if (typeof user.role === 'string') {
      return user.role;
    }

    if (Array.isArray(user.roles) && user.roles.length > 0) {
      return user.roles.includes('admin') ? 'admin' : user.roles[0];
    }

    return null;
  }

  /** Metodo del servicio que encapsula la operacion isAdmin sin exponer detalles del backend al componente. */
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  /** Metodo del servicio que encapsula la operacion hasDownloadAccess sin exponer detalles del backend al componente. */
  hasDownloadAccess(): boolean {
    return this.canDownload();
  }

  /** Metodo del servicio que encapsula la operacion canDownload sin exponer detalles del backend al componente. */
  canDownload(): boolean {
    return this.isLoggedIn();
  }

  /** Metodo del servicio que encapsula la operacion getTokenData sin exponer detalles del backend al componente. */
  getTokenData(): Observable<tokenData> {
    const token = localStorage.getItem('token');

    if (!token) {
      return throwError(() => new Error('No token found'));
    }

    try {
      const decodedToken = jwtDecode<tokenData>(token);
      return of(decodedToken);
    } catch (error) {
      console.error('Error decoding token:', error);
      return throwError(() => new Error('Invalid token'));
    }
  }
}
