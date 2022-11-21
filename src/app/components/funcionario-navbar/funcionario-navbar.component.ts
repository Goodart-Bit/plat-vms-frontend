import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-funcionario-navbar',
  templateUrl: './funcionario-navbar.component.html',
  styleUrls: ['./funcionario-navbar.component.css']
})
export class FuncionarioNavbarComponent implements OnInit {
  routerUrl!: string;
  userId!: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.routerUrl = this.router.url
    this.userId = this.userService.getUser().id
  }

  onClickCuenta() {
    this.router.navigate([`${this.routerUrl}/${this.userId}/account-details`])
  }

  onClickVias() {
    this.router.navigate([`${this.routerUrl}/${this.userId}/vias-asignadas`])
  }

  onClickAlertas() {
    this.router.navigate([`${this.routerUrl}/mis-alertas`])
  }

  onClickPanelesVia() {
    this.router.navigate([`${this.routerUrl}/paneles`])
  }
}
