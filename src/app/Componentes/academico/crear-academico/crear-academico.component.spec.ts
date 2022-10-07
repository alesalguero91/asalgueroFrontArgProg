import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAcademicoComponent } from './crear-academico.component';

describe('CrearAcademicoComponent', () => {
  let component: CrearAcademicoComponent;
  let fixture: ComponentFixture<CrearAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
