import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSMSComponent } from './mobile-sms.component';

describe('MobileSMSComponent', () => {
  let component: MobileSMSComponent;
  let fixture: ComponentFixture<MobileSMSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSMSComponent]
    });
    fixture = TestBed.createComponent(MobileSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
