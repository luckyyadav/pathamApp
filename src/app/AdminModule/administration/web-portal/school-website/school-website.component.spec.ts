import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolWebsiteComponent } from './school-website.component';

describe('SchoolWebsiteComponent', () => {
  let component: SchoolWebsiteComponent;
  let fixture: ComponentFixture<SchoolWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolWebsiteComponent]
    });
    fixture = TestBed.createComponent(SchoolWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
