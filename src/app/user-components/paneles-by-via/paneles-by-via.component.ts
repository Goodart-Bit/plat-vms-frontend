import { Component, OnInit } from '@angular/core';
import { VmsService } from 'src/app/services/vms/vms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vms } from 'src/app/entities/Misc';

@Component({
  selector: 'app-paneles-by-via',
  templateUrl: './paneles-by-via.component.html',
  styleUrls: ['./paneles-by-via.component.css']
})
export class PanelesByViaComponent implements OnInit {
  vms_list!: Vms[];
  displayedColumns: string[] = ['id','coordenadas','tipo','idViaAsignada','estado','actions']
  idVia!: string;

  constructor(private vmsService: VmsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idVia = String(this.route.snapshot.paramMap.get('id'));
    this.vmsService.getVmsByVia(this.idVia).subscribe(vms_list => {
      this.vms_list = vms_list;
    })
  }

  getPanel(id: string) {
    this.router.navigate(['funcionario','panel',id])
  }
}
