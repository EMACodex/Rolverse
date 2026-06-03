import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RUTA_API } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${RUTA_API}contact`;

  constructor(private http: HttpClient) {}

  sendContactForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, data);
  }
}
