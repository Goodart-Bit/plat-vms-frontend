import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViasComponent } from './table-vias.component';

describe('TableViasComponent', () => {
  let component: TableViasComponent;
  let fixture: ComponentFixture<TableViasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
