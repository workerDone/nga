import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSystemComponent } from './referral-system.component';

describe('ReferralSystemComponent', () => {
  let component: ReferralSystemComponent;
  let fixture: ComponentFixture<ReferralSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
