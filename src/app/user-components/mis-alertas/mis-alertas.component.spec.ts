import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAlertasComponent } from './mis-alertas.component';

describe('MisAlertasComponent', () => {
  let component: MisAlertasComponent;
  let fixture: ComponentFixture<MisAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
