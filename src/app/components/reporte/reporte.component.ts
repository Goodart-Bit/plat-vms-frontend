import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/entities/Misc';
import { ReporteService } from 'src/app/services/reporte/reporte-service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  reporte!: any;

  constructor(private reporteService: ReporteService, private userService: UserService) { }

  ngOnInit(): void {
    this.reporte = {
      fechaInicio: '',
      nameVia: '',
      tipoEvento: '',
      idCreador: this.userService.getUser().id,
      coordenadas: [0,0]
    }
  }

  onSubmit() {
    let reportData: string[] = Object.values(this.reporte)
    if(reportData.some(value => {value.length == 0})){
      alert('Invalid data')
      return
    }
    this.attemptReport();
  }

  attemptReport() {
    this.reporteService.addReport(this.reporte).subscribe({
      next: created => {
        alert(`Reporte ${created.id} creado exitosamente`)
      },
      error: err => {
        alert(`Error al crear el reporte`)
      }
    })
  }

}
