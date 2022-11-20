import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funcionario } from 'src/app/entities/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/funcionario'
  private activeUser: any = null;

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  getFuncionarioByEmail(email: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.apiUrl}/auth=${email}`)
  }

  activateUser(user: any) {
    this.activeUser = user;
  }

  getUser(): any {
    return this.activeUser;
  }
}
