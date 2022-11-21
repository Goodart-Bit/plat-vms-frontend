import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';
import { Via } from 'src/app/entities/Misc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-vias',
  templateUrl: './table-vias.component.html',
  styleUrls: ['./table-vias.component.css']
})
export class TableViasComponent implements OnInit {
  viasData!: Via[];
  displayedColumns: string[] = ['id','nombre','municipio','actions']

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.viasData = this.userService.getUser().viasAsignadas;
  }

  getVia(id: string) {
    this.router.navigate(['funcionario','paneles-by-via',id])
  }
}
