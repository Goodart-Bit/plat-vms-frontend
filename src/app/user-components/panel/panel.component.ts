import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vms } from 'src/app/entities/Misc';
import { VmsService } from 'src/app/services/vms/vms.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  panel!: any;
  panelProperties!: string[];
  @Input() customEstado!: string;

  constructor(private route: ActivatedRoute, private vmsService: VmsService) { }

  ngOnInit(): void {
    let panel_id: string = String(this.route.snapshot.paramMap.get('id'))
    this.vmsService.getVmsById(panel_id).subscribe(vms => {
      this.panel = vms; // 'cause it should return one object only
      this.panelProperties = Object.getOwnPropertyNames(this.panel)
    })
  }

  panelApagado(): boolean {
    return this.panel.estado === "apagado";
  }

  onToggleEstado() {
    this.panel.estado = this.panel.estado === "apagado" ? "encendido" : "apagado";
    this.updatePanel()
  }
  
  onInputEstado(estado: string) {
    this.panel.estado = estado;
    this.updatePanel()
  }

  updatePanel() {
    this.vmsService.changeState(this.panel)
  }
}
