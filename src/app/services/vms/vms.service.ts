import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vms } from 'src/app/entities/Misc';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class VmsService {
  private vmsUrl = "http://localhost:8080/panel"

  constructor(private http: HttpClient) { }

  getVmsByVia(idVia: string): Observable<Vms[]> {
    return this.http.get<Vms[]>(`${this.vmsUrl}/getVmsInVia/${idVia}`)
  }
}
