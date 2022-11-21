import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarReportesComponent } from './filtrar-reportes.component';

describe('FiltrarReportesComponent', () => {
  let component: FiltrarReportesComponent;
  let fixture: ComponentFixture<FiltrarReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
