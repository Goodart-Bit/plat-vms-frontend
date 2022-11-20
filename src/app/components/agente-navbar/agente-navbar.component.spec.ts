import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteNavbarComponent } from './agente-navbar.component';

describe('AgenteNavbarComponent', () => {
  let component: AgenteNavbarComponent;
  let fixture: ComponentFixture<AgenteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenteNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
