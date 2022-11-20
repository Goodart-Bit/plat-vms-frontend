import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-navbar',
  templateUrl: './funcionario-navbar.component.html',
  styleUrls: ['./funcionario-navbar.component.css']
})
export class FuncionarioNavbarComponent implements OnInit {
  routerUrl!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routerUrl = this.router.url
  }

  onClickCuenta() {
    this.router.navigate([`${this.routerUrl}/account-details`])
  }

  onClickVias() {
    this.router.navigate([`${this.routerUrl}/vias-asignadas`])
  }

  onClickAlertas() {
    this.router.navigate([`${this.routerUrl}/mis-alertas`])
  }

}
