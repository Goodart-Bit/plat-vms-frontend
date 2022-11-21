import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { ReplaySubject } from 'rxjs';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent implements OnInit {
  login!: string;
  password!: string;
  type!: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit() {
    if (!(this.login)) {
      alert('Ingrese sus creedenciales')
      return;
    }
    this.attemptLogin();
  }

  async attemptLogin() {
    let user: any;
    let typeRoute: string;
    if (this.type === 'funcionario') {
      user = await this.getFuncionario();
      typeRoute = "funcionario"
    } else {
      user = await this.getAgente();
      typeRoute = "agentevial"
    }
    if (user.error) {
      this.login = ""
      this.password = ""
      alert("Creedenciales invalidas")
    } else {
      this.userService.activateUser(user);
      this.router.navigate([typeRoute])
    }
  }

  private getFuncionario(): Promise<any> {
    return new Promise<any>((resolve) => {
      this.userService.authenticateFuncionario({"email":this.login,"password":this.password}).subscribe({
        next: user => {
          if (user) {
            resolve(user);
          } else if (!user) {
            resolve({ 'error': 'access but not found' })
          }
        },
        error: err => {
          resolve({ 'error': err })
        }
      });
    });
  }

  private getAgente(): Promise<any> {
    return new Promise<any>((resolve) => {
      this.userService.authenticateAgente({"email":this.login,"password":this.password}).subscribe({
        next: user => {
          if (user) {
            resolve(user);
          } else {
            resolve({ 'error': 'not found' })
          }
        },
        error: err => {
          resolve({ 'error': err })
        }
      });
    });
  }
}
