import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RUTA_API } from '../../environment';
import {
  personalUserResponse,
  profileImageResponse,
} from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = `${RUTA_API}user`;

  constructor(
    private http: HttpClient,
  ) { }

  getUserById(id: number): Observable<personalUserResponse> {
    return this.http.get<personalUserResponse>(`${this.apiURL}/${id}`);
  }

  getOwnContent(): Observable<any> {
    return this.http.get(`${this.apiURL}/me/content`);
  }

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
