import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sanguche {
  id: number;
  nombre: string;
  ingredientes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SangucheService {
  private apiUrl = 'http://127.0.0.1:3000/api/sanguches';

  constructor(private http: HttpClient) {}

  getAllSanguches(): Observable<Sanguche[]> {
    return this.http.get<Sanguche[]>(this.apiUrl);
  }

  addSanguche(sanguche: Sanguche): Observable<void> {
    return this.http.post<void>(this.apiUrl, { sanguche });
  }

  deleteSanguche(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
