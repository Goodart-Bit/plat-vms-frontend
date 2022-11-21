import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Reporte } from 'src/app/entities/Misc';
import { ReporteService } from 'src/app/services/reporte/reporte-service';
import { UserService } from 'src/app/services/user/user-service.service';
import { Via } from 'src/app/entities/Misc';
import { last, lastValueFrom,of } from 'rxjs';

@Component({
  selector: 'app-mis-alertas',
  templateUrl: './mis-alertas.component.html',
  styleUrls: ['./mis-alertas.component.css']
})
export class MisAlertasComponent implements OnInit {
  startDate!: Date;
  endDate!: Date;
  userReports!: Reporte[];
  displayedColumns: string[] = ['id', 'fecha_ini', 'via', 'evento']

  constructor(private router: Router, private datePipe: DatePipe, private reporteService: ReporteService, private userService: UserService) { }

  ngOnInit(): void {
    let vias: Via[] = this.userService.getUser().viasAsignadas
    let promises: Promise<Reporte[]>[] = []
    vias.forEach(value => {
      let reportPromise: Promise<any> = this.reporteService.getReportsFromViaName(String(value.id)).toPromise()
      promises.push(reportPromise)
    })
    Promise.all(promises).then(reports => {
      this.userReports = reports.flat()
    })
  }


  onFiltrar() {
    let format_start: string = this.formatDate(this.startDate)
    let format_end: string = this.formatDate(this.endDate)
    this.router.navigate([this.router.url, 'filtrar', `${format_start}&${format_end}`])
  }

  formatDate(date: Date): string {
    return String(this.datePipe.transform(date, 'dd-MM-yyyy'))
  }
}
