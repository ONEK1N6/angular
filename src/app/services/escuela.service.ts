import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../models/escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  private apiUrl = 'http://localhost:8080/api/escuelas';

  constructor(private http: HttpClient) {}

  // Obtener todas las escuelas
  getEscuelas(): Observable<Escuela[]> {
    return this.http.get<Escuela[]>(this.apiUrl);
  }

  // Crear una escuela
  createEscuela(escuela: Escuela): Observable<Escuela> {
    return this.http.post<Escuela>(this.apiUrl, escuela);
  }

  // Obtener escuela por ID
  getEscuelaById(id: number): Observable<Escuela> {
    return this.http.get<Escuela>(`${this.apiUrl}/${id}`);
  }

  // Actualizar escuela
  updateEscuela(id: number, escuela: Escuela): Observable<Escuela> {
    return this.http.put<Escuela>(`${this.apiUrl}/${id}`, escuela);
  }

  // Eliminar escuela
  deleteEscuela(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
