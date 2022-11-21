import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReporteService } from 'src/app/services/reporte/reporte-service';
import { UserService } from 'src/app/services/user/user-service.service';
import { Reporte, Via } from 'src/app/entities/Misc';

@Component({
  selector: 'app-filtrar-reportes',
  templateUrl: './filtrar-reportes.component.html',
  styleUrls: ['./filtrar-reportes.component.css']
})
export class FiltrarReportesComponent implements OnInit {
  iniDate!: string;
  endDate!: string;
  userReports!: Reporte[];
  displayedColumns: string[] = ['id', 'fecha_ini', 'via', 'evento']

  constructor(private route: ActivatedRoute, private reporteService: ReporteService) { }

  ngOnInit(): void {
    let date = String(this.route.snapshot.paramMap.get('ini&:end'));
    this.iniDate = date.split('&')[0];
    this.endDate = date.split('&')[1];
    this.reporteService.filterReportsByFecha(this.iniDate,this.endDate).subscribe(filter => {
      this.userReports = filter
    })
  }
}