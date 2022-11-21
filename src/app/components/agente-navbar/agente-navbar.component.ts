import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-agente-navbar',
  templateUrl: './agente-navbar.component.html',
  styleUrls: ['./agente-navbar.component.css']
})
export class AgenteNavbarComponent implements OnInit {
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

  onClickReportes() {
    this.router.navigate([`${this.routerUrl}/mis-reportes`])
  }
}
