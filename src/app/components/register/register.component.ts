import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';
import { AgenteVial, Funcionario } from 'src/app/entities/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginFields: any;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loginFields = {
      email: '',
      pass: '',
      firstName: '',
      lastName: '',
      type: ''
    }
  }

  onSubmit() {
    let registerInfo: string[] = Object.values(this.loginFields)
    if (!this.assertData(registerInfo)) {
      alert('Invalid fields')
      return
    }
    let user = {
      email: this.loginFields.email,
      password: this.loginFields.pass,
      firstName: this.loginFields.firstName,
      lastName: this.loginFields.lastName,
    }
    this.attemptRegister(user);
  }

  async attemptRegister(user: any) {
    let persistedUser: any;
    if (this.loginFields.type === 'agente') {
      persistedUser = await this.registerAgent(user)
    } else {
      persistedUser = await this.registerFuncionario(user);
    }
    if (persistedUser.error) {
      console.error(persistedUser.error)
      alert('Error on creation')
    } else {
      alert('User created')
    }
  }

  private registerAgent(user: any): Promise<any> {
    return new Promise<any>((resolve) => {
      this.userService.addAgente(user).subscribe({
        next: user => {
          if (!user) {
            resolve({ 'error': 'access but not found' })
          }
          resolve(user);
        },
        error: err => {
          resolve({ 'error': err })
        }
      });
    });
  }

  async registerFuncionario(user: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.userService.addAgente(user).subscribe({
        next: user => {
          if (!user) {
            resolve({ 'error': 'access but not found' })
          }
          resolve(user);
        },
        error: err => {
          resolve({ 'error': err })
        }
      });
    })
  }

  assertData(registerData: string[]): boolean {
    let valid = true;
    registerData.forEach(field => {
      if (field === '') {
        valid = false;
      }
    });
    return valid
  }
}
