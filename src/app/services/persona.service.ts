import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribute, Category, Persona, PersonaPayload } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'https://personificca-api.onrender.com';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/index.php`);
  }

  getPersona(id: number): Observable<Persona | null> {
    return this.http.get<Persona | null>(`${this.apiUrl}/edit.php?id=${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories.php`);
  }

  getAttributes(): Observable<Attribute[]> {
    return this.http.get<Attribute[]>(`${this.apiUrl}/attributes.php`);
  }

  createPersona(persona: PersonaPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/create.php`, persona);
  }

  updatePersona(id: number, persona: PersonaPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/update.php?id=${id}`, persona);
  }

  deletePersona(id: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/delete.php?id=${id}`, {});
  }
}
