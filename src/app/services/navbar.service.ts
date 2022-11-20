import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private showAgentNavBar: boolean = false;  //if both FALSE -> FUNCIONARIO nav bar*
  private userNavsubject = new Subject<any>();

  constructor() { }

  toggleLoggedNavBar(type: string): void {
    if (type === 'funcionario') {
      this.showAgentNavBar = false;
    } else {
      this.showAgentNavBar = true;
    }
    this.userNavsubject.next(this.showAgentNavBar);
  }

  onToggle(): Observable<any> {
    return this.userNavsubject.asObservable();
  }
}
