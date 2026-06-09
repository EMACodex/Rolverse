import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RUTA_API } from '../../environment';
import {
  Match,
  MatchAction,
  MatchBoard,
  MatchCharacter,
  MatchInvitation,
  MatchMessage,
  MatchModule,
  MatchResponse,
  MatchUserSearchResult,
} from '../interfaces/match.interface';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiURL = `${RUTA_API}matches`;

  constructor(private http: HttpClient) {}

  getMatches(search = ''): Observable<MatchResponse<Match[]>> {
    let params = new HttpParams();
    if (search.trim()) {
      params = params.set('search', search.trim());
    }
    return this.http.get<MatchResponse<Match[]>>(this.apiURL, { params });
  }

  getMatchById(id: number): Observable<MatchResponse<Match>> {
    return this.http.get<MatchResponse<Match>>(`${this.apiURL}/${id}`);
  }

  createMatch(formData: FormData): Observable<MatchResponse<Match>> {
    return this.http.post<MatchResponse<Match>>(this.apiURL, formData);
  }

  updateMatch(id: number, formData: FormData): Observable<MatchResponse<Match>> {
    return this.http.put<MatchResponse<Match>>(`${this.apiURL}/${id}`, formData);
  }

  updateMatchAccessType(
    id: number,
    access_type: 'public' | 'private',
  ): Observable<MatchResponse<Match> & { match?: Match }> {
    return this.http.put<MatchResponse<Match> & { match?: Match }>(
      `${this.apiURL}/${id}/access-type`,
      { access_type },
    );
  }

  deleteMatch(id: number): Observable<MatchResponse<Match>> {
    return this.http.delete<MatchResponse<Match>>(`${this.apiURL}/${id}`);
  }

  finishMatch(id: number): Observable<MatchResponse<Match>> {
    return this.http.put<MatchResponse<Match>>(`${this.apiURL}/${id}/finish`, {});
  }

  joinPublicMatch(id: number): Observable<any> {
    return this.http.post(`${this.apiURL}/${id}/join`, {});
  }

  getMessages(matchId: number): Observable<MatchResponse<MatchMessage[]>> {
    return this.http.get<MatchResponse<MatchMessage[]>>(
      `${this.apiURL}/${matchId}/messages`,
    );
  }

  sendMessage(matchId: number, formData: FormData): Observable<MatchResponse<MatchMessage>> {
    return this.http.post<MatchResponse<MatchMessage>>(
      `${this.apiURL}/${matchId}/messages`,
      formData,
    );
  }

  rollDice(matchId: number): Observable<MatchResponse<MatchMessage>> {
    return this.http.post<MatchResponse<MatchMessage>>(
      `${this.apiURL}/${matchId}/roll-dice`,
      {},
    );
  }

  getCharacters(matchId: number): Observable<MatchResponse<MatchCharacter[]>> {
    return this.http.get<MatchResponse<MatchCharacter[]>>(
      `${this.apiURL}/${matchId}/characters`,
    );
  }

  createOrUpdateCharacter(
    matchId: number,
    formData: FormData,
  ): Observable<MatchResponse<MatchCharacter>> {
    return this.http.post<MatchResponse<MatchCharacter>>(
      `${this.apiURL}/${matchId}/characters`,
      formData,
    );
  }

  updateCharacter(
    matchId: number,
    characterId: number,
    formData: FormData,
  ): Observable<MatchResponse<MatchCharacter>> {
    return this.http.put<MatchResponse<MatchCharacter>>(
      `${this.apiURL}/${matchId}/characters/${characterId}`,
      formData,
    );
  }

  getModules(matchId: number): Observable<MatchResponse<MatchModule[]>> {
    return this.http.get<MatchResponse<MatchModule[]>>(
      `${this.apiURL}/${matchId}/modules`,
    );
  }

  uploadModule(matchId: number, formData: FormData): Observable<MatchResponse<MatchModule>> {
    return this.http.post<MatchResponse<MatchModule>>(
      `${this.apiURL}/${matchId}/modules`,
      formData,
    );
  }

  deleteModule(matchId: number, moduleId: number): Observable<MatchResponse<MatchModule>> {
    return this.http.delete<MatchResponse<MatchModule>>(
      `${this.apiURL}/${matchId}/modules/${moduleId}`,
    );
  }

  getBoards(matchId: number): Observable<MatchResponse<MatchBoard[]>> {
    return this.http.get<MatchResponse<MatchBoard[]>>(
      `${this.apiURL}/${matchId}/boards`,
    );
  }

  uploadBoard(matchId: number, formData: FormData): Observable<MatchResponse<MatchBoard>> {
    return this.http.post<MatchResponse<MatchBoard>>(
      `${this.apiURL}/${matchId}/boards`,
      formData,
    );
  }

  deleteBoard(matchId: number, boardId: number): Observable<MatchResponse<MatchBoard>> {
    return this.http.delete<MatchResponse<MatchBoard>>(
      `${this.apiURL}/${matchId}/boards/${boardId}`,
    );
  }

  getActions(matchId: number): Observable<MatchResponse<MatchAction[]>> {
    return this.http.get<MatchResponse<MatchAction[]>>(
      `${this.apiURL}/${matchId}/actions`,
    );
  }

  createAction(matchId: number, payload: { action_text: string; rollDice: boolean }): Observable<MatchResponse<MatchAction>> {
    return this.http.post<MatchResponse<MatchAction>>(
      `${this.apiURL}/${matchId}/actions`,
      payload,
    );
  }

  reviewAction(
    matchId: number,
    actionId: number,
    status: 'approved' | 'rejected',
    master_response: string,
  ): Observable<MatchResponse<MatchAction>> {
    return this.http.put<MatchResponse<MatchAction>>(
      `${this.apiURL}/${matchId}/actions/${actionId}`,
      { status, master_response },
    );
  }

  searchUser(matchId: number, email: string): Observable<MatchResponse<MatchUserSearchResult[]>> {
    const params = new HttpParams().set('email', email);
    return this.http.get<MatchResponse<MatchUserSearchResult[]>>(
      `${this.apiURL}/${matchId}/search-user`,
      { params },
    );
  }

  inviteUser(matchId: number, email: string): Observable<any> {
    return this.http.post(`${this.apiURL}/${matchId}/invite`, { email });
  }

  getMyMatchInvitations(): Observable<MatchResponse<MatchInvitation[]>> {
    return this.http.get<MatchResponse<MatchInvitation[]>>(
      `${this.apiURL}/invitations/me`,
    );
  }

  respondInvitation(
    invitationId: number,
    status: 'accepted' | 'rejected',
  ): Observable<any> {
    return this.http.put(`${this.apiURL}/invitations/${invitationId}/respond`, {
      status,
    });
  }
}
