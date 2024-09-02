// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users/'; // URL de tu API

  constructor(private http: HttpClient) { }

  // Método para enviar los datos del formulario al backend
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, { user:{ id: 1, username: "", email: email, password:password, creaciones: []} });
  }
}
