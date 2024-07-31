import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private apiUrl = 'http://localhost:3000/alumno';

  constructor(private http: HttpClient) {}

  getAlumno(matricula: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${matricula}`);
  }
}
