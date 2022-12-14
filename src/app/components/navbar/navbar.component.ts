import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routeIncludes(param: string){
    return this.router.url.includes(param);
  }

  onClickRegistro() {
    this.router.navigate([`${this.router.url}/registro`])
  }
}
