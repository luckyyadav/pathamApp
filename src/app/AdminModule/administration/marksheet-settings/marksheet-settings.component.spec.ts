import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksheetsSettingsComponent } from './marksheet-settings.component';

describe('MarksheetsSettingsComponent', () => {
  let component: MarksheetsSettingsComponent;
  let fixture: ComponentFixture<MarksheetsSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarksheetsSettingsComponent]
    });
    fixture = TestBed.createComponent(MarksheetsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
