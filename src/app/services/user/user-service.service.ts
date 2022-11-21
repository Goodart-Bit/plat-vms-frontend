import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgenteVial, Funcionario } from 'src/app/entities/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private funcionarioAPIUrl = 'http://localhost:8080/funcionario'
  private agenteAPIUrl = 'http://localhost:8080/agente'
  private activeUser: any = null;

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.funcionarioAPIUrl);
  }

  authenticateFuncionario(creedentials:any): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.funcionarioAPIUrl}/auth`,creedentials,httpOptions)
  }

  authenticateAgente(creedentials:any): Observable<AgenteVial> {
    return this.http.post<AgenteVial>(`${this.agenteAPIUrl}/auth`,creedentials,httpOptions)
  }

  addFuncionario(newFuncionario: any): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.agenteAPIUrl}/add`,newFuncionario,httpOptions)
  }

  addAgente(newAgente: any): Observable<AgenteVial> {
    return this.http.post<AgenteVial>(`${this.agenteAPIUrl}/add`,newAgente,httpOptions)
  }

  activateUser(user: any) {
    this.activeUser = user;
  }

  getUser(): any {
    return this.activeUser;
  }
}
