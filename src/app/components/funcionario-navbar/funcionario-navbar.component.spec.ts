import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioNavbarComponent } from './funcionario-navbar.component';

describe('FuncionarioNavbarComponent', () => {
  let component: FuncionarioNavbarComponent;
  let fixture: ComponentFixture<FuncionarioNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
