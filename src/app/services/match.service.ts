import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
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
/**
 * Servicio de partidas.
 * Centraliza creacion, busqueda, invitaciones, mensajes, tableros y acciones.
 */
export class MatchService {
  private apiURL = `${environment.apiUrl}/matches`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene las partidas visibles.
   * Si se indica busqueda, se envia como query param al backend.
   */
  getMatches(search = ''): Observable<MatchResponse<Match[]>> {
    let params = new HttpParams();
    if (search.trim()) {
      params = params.set('search', search.trim());
    }
    return this.http.get<MatchResponse<Match[]>>(this.apiURL, { params });
  }

  /** Metodo del servicio que encapsula la operacion getMatchById sin exponer detalles del backend al componente. */
  getMatchById(id: number): Observable<MatchResponse<Match>> {
    return this.http.get<MatchResponse<Match>>(`${this.apiURL}/${id}`);
  }

  /** Metodo del servicio que encapsula la operacion createMatch sin exponer detalles del backend al componente. */
  createMatch(formData: FormData): Observable<MatchResponse<Match>> {
    return this.http.post<MatchResponse<Match>>(this.apiURL, formData);
  }

  /** Metodo del servicio que encapsula la operacion updateMatch sin exponer detalles del backend al componente. */
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

  /** Metodo del servicio que encapsula la operacion deleteMatch sin exponer detalles del backend al componente. */
  deleteMatch(id: number): Observable<MatchResponse<Match>> {
    return this.http.delete<MatchResponse<Match>>(`${this.apiURL}/${id}`);
  }

  /** Metodo del servicio que encapsula la operacion finishMatch sin exponer detalles del backend al componente. */
  finishMatch(id: number): Observable<MatchResponse<Match>> {
    return this.http.put<MatchResponse<Match>>(`${this.apiURL}/${id}/finish`, {});
  }

  /** Metodo del servicio que encapsula la operacion joinPublicMatch sin exponer detalles del backend al componente. */
  joinPublicMatch(id: number): Observable<any> {
    return this.http.post(`${this.apiURL}/${id}/join`, {});
  }

  /** Metodo del servicio que encapsula la operacion getMessages sin exponer detalles del backend al componente. */
  getMessages(matchId: number): Observable<MatchResponse<MatchMessage[]>> {
    return this.http.get<MatchResponse<MatchMessage[]>>(
      `${this.apiURL}/${matchId}/messages`,
    );
  }

  /** Metodo del servicio que encapsula la operacion sendMessage sin exponer detalles del backend al componente. */
  sendMessage(matchId: number, formData: FormData): Observable<MatchResponse<MatchMessage>> {
    return this.http.post<MatchResponse<MatchMessage>>(
      `${this.apiURL}/${matchId}/messages`,
      formData,
    );
  }

  /** Metodo del servicio que encapsula la operacion rollDice sin exponer detalles del backend al componente. */
  rollDice(matchId: number): Observable<MatchResponse<MatchMessage>> {
    return this.http.post<MatchResponse<MatchMessage>>(
      `${this.apiURL}/${matchId}/roll-dice`,
      {},
    );
  }

  /** Metodo del servicio que encapsula la operacion getCharacters sin exponer detalles del backend al componente. */
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

  /** Metodo del servicio que encapsula la operacion getModules sin exponer detalles del backend al componente. */
  getModules(matchId: number): Observable<MatchResponse<MatchModule[]>> {
    return this.http.get<MatchResponse<MatchModule[]>>(
      `${this.apiURL}/${matchId}/modules`,
    );
  }

  /** Metodo del servicio que encapsula la operacion uploadModule sin exponer detalles del backend al componente. */
  uploadModule(matchId: number, formData: FormData): Observable<MatchResponse<MatchModule>> {
    return this.http.post<MatchResponse<MatchModule>>(
      `${this.apiURL}/${matchId}/modules`,
      formData,
    );
  }

  /** Metodo del servicio que encapsula la operacion deleteModule sin exponer detalles del backend al componente. */
  deleteModule(matchId: number, moduleId: number): Observable<MatchResponse<MatchModule>> {
    return this.http.delete<MatchResponse<MatchModule>>(
      `${this.apiURL}/${matchId}/modules/${moduleId}`,
    );
  }

  /** Metodo del servicio que encapsula la operacion getBoards sin exponer detalles del backend al componente. */
  getBoards(matchId: number): Observable<MatchResponse<MatchBoard[]>> {
    return this.http.get<MatchResponse<MatchBoard[]>>(
      `${this.apiURL}/${matchId}/boards`,
    );
  }

  /** Metodo del servicio que encapsula la operacion uploadBoard sin exponer detalles del backend al componente. */
  uploadBoard(matchId: number, formData: FormData): Observable<MatchResponse<MatchBoard>> {
    return this.http.post<MatchResponse<MatchBoard>>(
      `${this.apiURL}/${matchId}/boards`,
      formData,
    );
  }

  /** Metodo del servicio que encapsula la operacion deleteBoard sin exponer detalles del backend al componente. */
  deleteBoard(matchId: number, boardId: number): Observable<MatchResponse<MatchBoard>> {
    return this.http.delete<MatchResponse<MatchBoard>>(
      `${this.apiURL}/${matchId}/boards/${boardId}`,
    );
  }

  /** Metodo del servicio que encapsula la operacion getActions sin exponer detalles del backend al componente. */
  getActions(matchId: number): Observable<MatchResponse<MatchAction[]>> {
    return this.http.get<MatchResponse<MatchAction[]>>(
      `${this.apiURL}/${matchId}/actions`,
    );
  }

  /** Metodo del servicio que encapsula la operacion createAction sin exponer detalles del backend al componente. */
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

  /** Metodo del servicio que encapsula la operacion searchUser sin exponer detalles del backend al componente. */
  searchUser(matchId: number, email: string): Observable<MatchResponse<MatchUserSearchResult[]>> {
    const params = new HttpParams().set('email', email);
    return this.http.get<MatchResponse<MatchUserSearchResult[]>>(
      `${this.apiURL}/${matchId}/search-user`,
      { params },
    );
  }

  /** Metodo del servicio que encapsula la operacion inviteUser sin exponer detalles del backend al componente. */
  inviteUser(matchId: number, email: string): Observable<any> {
    return this.http.post(`${this.apiURL}/${matchId}/invite`, { email });
  }

  /** Metodo del servicio que encapsula la operacion getMyMatchInvitations sin exponer detalles del backend al componente. */
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
