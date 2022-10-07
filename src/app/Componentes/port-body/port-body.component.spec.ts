import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortBodyComponent } from './port-body.component';

describe('PortBodyComponent', () => {
  let component: PortBodyComponent;
  let fixture: ComponentFixture<PortBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
