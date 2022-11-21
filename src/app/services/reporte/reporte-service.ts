import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reporte } from 'src/app/entities/Misc';
import { Via } from 'src/app/entities/Misc';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private reporteUrl = 'http://localhost:8080/reports'

  constructor(private http: HttpClient) { }

  getAgentReports(id: string): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.reporteUrl}/user/${id}`)
  }

  getReportsFromViaName(nameVia: string): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.reporteUrl}/via/${nameVia}`)
  }

  addReport(report: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(`${this.reporteUrl}/add`,report,httpOptions);
  }

  filterReportsByFecha(fecha_ini: string, fecha_fin: string): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.reporteUrl}/from${fecha_ini}to${fecha_fin}`)
  }
}
