import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  createForumResponse,
  deleteForumResponse,
  ForumInterface,
  ForumInvitationResponse,
  getForumResponse,
  getForumsResponse,
  PrivateForumUserResponse,
} from '../interfaces/forum.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de acceso a foros.
 * Usa environment.apiUrl para funcionar igual en web, Electron y Capacitor.
 */
export class ForumService {

  private apiURL = `${environment.apiUrl}/forum`;

  constructor(
    private http: HttpClient
  ) { }

  /** Obtiene foros visibles para el usuario actual, incluyendo acceso privado si aplica. */
  getAllForums(): Observable<getForumsResponse> {
    return this.http.get<getForumsResponse>(`${this.apiURL}/all`);
  }

  /** Metodo del servicio que encapsula la operacion getForumById sin exponer detalles del backend al componente. */
  getForumById(id: number): Observable<getForumResponse>{
    return this.http.get<getForumResponse>(`${this.apiURL}/${id}`);
  }

  /** Metodo del servicio que encapsula la operacion createForum sin exponer detalles del backend al componente. */
  createForum(forumData: ForumInterface): Observable<createForumResponse> {
    return this.http.post<createForumResponse>(`${this.apiURL}/new`, forumData);
  }

  /** Metodo del servicio que encapsula la operacion updateForum sin exponer detalles del backend al componente. */
  updateForum(id: number, forumData: Partial<ForumInterface>): Observable<createForumResponse> {
    return this.http.put<createForumResponse>(`${this.apiURL}/${id}`, forumData);
  }

  updateForumVisibility(
    forumId: number,
    visibility: 'public' | 'private'
  ): Observable<{ message: string; forum: ForumInterface; data?: ForumInterface }> {
    return this.http.put<{ message: string; forum: ForumInterface; data?: ForumInterface }>(
      `${this.apiURL}/${forumId}/visibility`,
      { visibility }
    );
  }

  /** Metodo del servicio que encapsula la operacion deleteForum sin exponer detalles del backend al componente. */
  deleteForum(id: number): Observable<deleteForumResponse> {
    return this.http.delete<deleteForumResponse>(`${this.apiURL}/${id}`);
  }

  searchPrivateForumUsers(
    forumId: number,
    email: string
  ): Observable<PrivateForumUserResponse> {
    return this.http.get<PrivateForumUserResponse>(
      `${this.apiURL}/private/${forumId}/search-user?email=${encodeURIComponent(email)}`
    );
  }

  /** Metodo del servicio que encapsula la operacion inviteUserToPrivateForum sin exponer detalles del backend al componente. */
  inviteUserToPrivateForum(forumId: number, email: string): Observable<any> {
    return this.http.post(`${this.apiURL}/private/${forumId}/invite`, { email });
  }

  /** Metodo del servicio que encapsula la operacion getMyInvitations sin exponer detalles del backend al componente. */
  getMyInvitations(): Observable<ForumInvitationResponse> {
    return this.http.get<ForumInvitationResponse>(`${this.apiURL}/invitations/me`);
  }

  respondToInvitation(
    invitationId: number,
    status: 'accepted' | 'rejected'
  ): Observable<any> {
    return this.http.put(`${this.apiURL}/invitations/${invitationId}/respond`, {
      status,
    });
  }
}
