import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte/reporte-service';
import { UserService } from 'src/app/services/user/user-service.service';
import { Reporte } from 'src/app/entities/Misc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  userReports!: Reporte[];
  displayedColumns: string[] = ['id','fecha_ini','via','evento']

  constructor(private reporteService: ReporteService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let id: string = this.userService.getUser().id;
    this.reporteService.getAgentReports(id).subscribe(report_list => {
      this.userReports = report_list as Reporte[]
    });
  }

  onReporte() {
    this.router.navigate([`${this.router.url}/new`])
  }
}
