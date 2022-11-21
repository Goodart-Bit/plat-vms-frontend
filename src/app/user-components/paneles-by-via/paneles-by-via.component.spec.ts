import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelesByViaComponent } from './paneles-by-via.component';

describe('PanelesByViaComponent', () => {
  let component: PanelesByViaComponent;
  let fixture: ComponentFixture<PanelesByViaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelesByViaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelesByViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
