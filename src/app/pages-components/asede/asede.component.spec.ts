import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsedeComponent } from './asede.component';

describe('AsedeComponent', () => {
  let component: AsedeComponent;
  let fixture: ComponentFixture<AsedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
