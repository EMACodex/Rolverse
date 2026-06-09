import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RUTA_API } from '../../environment';
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
export class AuthService {
  private apiURL = `${RUTA_API}auth`;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: LoginCredentials): Observable<Response> {
    return this.http.post<Response>(`${this.apiURL}/login`, credentials);
  }

  register(credentials: RegisterCredentials): Observable<Response> {
    return this.http.post<Response>(`${this.apiURL}/register`, credentials);
  }

  isAuth(): boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  sendMailRecoversPass(email: string): Observable<Response> {
    return this.http.post<Response>(`${this.apiURL}/sendrecover`, { email });
  }

  resetPass(token: string, password: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiURL}/recover`, {
      token,
      password,
    });
  }
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

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  hasDownloadAccess(): boolean {
    return this.canDownload();
  }

  canDownload(): boolean {
    return this.isLoggedIn();
  }

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
