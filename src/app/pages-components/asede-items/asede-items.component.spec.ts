import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsedeItemsComponent } from './asede-items.component';

describe('AsedeItemsComponent', () => {
  let component: AsedeItemsComponent;
  let fixture: ComponentFixture<AsedeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsedeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsedeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
