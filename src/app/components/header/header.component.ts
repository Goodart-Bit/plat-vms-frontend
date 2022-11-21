import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private userService: UserService) {
  }

  ngOnInit(): void { 
    if(!this.userService.getUser()){
      //alert('Inicie sesion nuevamente, por favor')
      //this.router.navigate(['/'])
    }
  }

  hasRoot(){
    return !(this.routeIncludes('/funcionario') || this.routeIncludes('/agentevial'));
  }

  routeIncludes(param: string){
    return this.router.url.includes(param);
  }
}
