import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  apiURL = 'https://localhost:5001/api/Cadastro';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  public calcularValorEmprestimo(cadastro: any): Observable<Cadastro> {
    return this.httpClient.post<any>(this.apiURL, cadastro, this.httpOptions);
  }
}
