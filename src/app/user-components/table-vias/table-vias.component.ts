import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';
import { Via } from 'src/app/entities/Via';

@Component({
  selector: 'app-table-vias',
  templateUrl: './table-vias.component.html',
  styleUrls: ['./table-vias.component.css']
})
export class TableViasComponent implements OnInit {
  viasData!: Via[];
  displayedColumns: string[] = ['id','nombre','municipio']

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.viasData = this.userService.getUser().viasAsignadas;
    console.log(this.viasData)
  }

}
