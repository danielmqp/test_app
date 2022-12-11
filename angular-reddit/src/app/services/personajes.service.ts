import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private api_personajes = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  public getAllPersonajes(): Observable<any> {
    return this.http.get(this.api_personajes);
  }
}
