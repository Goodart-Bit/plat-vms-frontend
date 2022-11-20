import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;  //Funcionario OR AgenteVial
  userType!: string;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    let type = this.route.snapshot.paramMap.get('type')
    this.userType = String(type)
    this.user = this.userService.getUser();
  }
}
