import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSubjectComponent } from './teacher-subject.component';

describe('TeacherSubjectComponent', () => {
  let component: TeacherSubjectComponent;
  let fixture: ComponentFixture<TeacherSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherSubjectComponent]
    });
    fixture = TestBed.createComponent(TeacherSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
