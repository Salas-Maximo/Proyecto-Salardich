import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  creaciones: any[];
}

interface RegisterResponse {
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3000/api/users';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl, { user });
  }
}
