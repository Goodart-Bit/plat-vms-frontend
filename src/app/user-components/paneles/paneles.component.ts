import { Component, OnInit } from '@angular/core';
import { Vms, Via } from 'src/app/entities/Misc';
import { UserService } from 'src/app/services/user/user-service.service';
import { VmsService } from 'src/app/services/vms/vms.service';

@Component({
  selector: 'app-paneles',
  templateUrl: './paneles.component.html',
  styleUrls: ['./paneles.component.css']
})
export class PanelesComponent implements OnInit {
  vms_list!: Vms[];
  displayedColumns: string[] = ['id','coordenadas','tipo','idViaAsignada','estado','actions']

  constructor(private vmsService: VmsService, private userService: UserService) { }

  ngOnInit(): void {
    let vias: Via[] = this.userService.getUser().viasAsignadas
    let promises: Promise<Vms[]>[] = []
    vias.forEach(value => {
      let reportPromise: Promise<any> = this.vmsService.getVmsByVia(String(value.id)).toPromise()
      promises.push(reportPromise)
    })
    Promise.all(promises).then(panelesByVia => {
      this.vms_list = panelesByVia.flat()
    })
  }

  getPanel(panel: any) {
    console.log(panel.id)
  }

}
