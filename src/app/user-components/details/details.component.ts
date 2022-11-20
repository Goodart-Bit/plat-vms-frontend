import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';
import { Via } from 'src/app/entities/Via';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: any;
  userProperties!: string[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userProperties = Object.getOwnPropertyNames(this.user)
    this.userProperties.pop()
  }
}
