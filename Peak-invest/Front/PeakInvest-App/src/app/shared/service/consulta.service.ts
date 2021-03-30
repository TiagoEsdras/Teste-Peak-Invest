import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta.models';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  apiURL = 'https://localhost:5001/api/Consulta/';
  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserById(id: number): Observable<Consulta> {
    return this.httpClient.get<Consulta>(this.apiURL + id);
  }
}

