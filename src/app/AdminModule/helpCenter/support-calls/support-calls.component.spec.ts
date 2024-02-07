import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCallsComponent } from './support-calls.component';

describe('SupportCallsComponent', () => {
  let component: SupportCallsComponent;
  let fixture: ComponentFixture<SupportCallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportCallsComponent]
    });
    fixture = TestBed.createComponent(SupportCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
