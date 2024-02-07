import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReportsComponent } from './email-reports.component';

describe('EmailReportsComponent', () => {
  let component: EmailReportsComponent;
  let fixture: ComponentFixture<EmailReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailReportsComponent]
    });
    fixture = TestBed.createComponent(EmailReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
