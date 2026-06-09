import { Injectable } from '@angular/core';
import { RUTA_API } from '../../environment';
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
export class ForumService {

  private apiURL = `${RUTA_API}forum`;

  constructor(
    private http: HttpClient
  ) { }

  getAllForums(): Observable<getForumsResponse> {
    return this.http.get<getForumsResponse>(`${this.apiURL}/all`);
  }

  getForumById(id: number): Observable<getForumResponse>{
    return this.http.get<getForumResponse>(`${this.apiURL}/${id}`);
  }

  createForum(forumData: ForumInterface): Observable<createForumResponse> {
    return this.http.post<createForumResponse>(`${this.apiURL}/new`, forumData);
  }

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

  inviteUserToPrivateForum(forumId: number, email: string): Observable<any> {
    return this.http.post(`${this.apiURL}/private/${forumId}/invite`, { email });
  }

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
