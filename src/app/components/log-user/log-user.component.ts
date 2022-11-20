import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent implements OnInit {
  login!: string;
  pass!: string;
  @Output() successSubmit = new EventEmitter();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {}

  onSubmit() {
    if (!(this.login)) {
      alert('Ingrese sus creedenciales')
      return;
    }
    this.attemptLogin();
  }

  async attemptLogin() {
    const creedentials = {
      email: this.login,
      pass: this.pass
    }
    const userMeta: any = await this.getUserMeta(creedentials)
    if (userMeta.error) {
      this.login = ""
      this.pass = ""
      alert("Creedenciales invalidas")
    } else {
      this.successSubmit.emit();
      this.router.navigate([userMeta.type,userMeta.id])
    }
  }

  private getUserMeta(creedentials: any): Promise<any> {
    return new Promise<any>((resolve) => {
      this.userService.getFuncionarioByEmail(creedentials.email).subscribe((user) => {
        if (user) {
          this.userService.activateUser(user);
          let type: string = user.hasOwnProperty('idViaAsignada') ? 'agentevial' : 'funcionario' ;
          resolve({
            'id':user.id,
            'type':type
          });
        } else {
          resolve({ 'error':'not found'})
        }
      });
    });
  }
}
