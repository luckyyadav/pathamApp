import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesComponentComponent } from './classes-component.component';

describe('ClassesComponentComponent', () => {
  let component: ClassesComponentComponent;
  let fixture: ComponentFixture<ClassesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassesComponentComponent]
    });
    fixture = TestBed.createComponent(ClassesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
