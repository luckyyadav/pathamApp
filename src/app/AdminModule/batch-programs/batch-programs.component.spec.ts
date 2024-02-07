import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchProgramsComponent } from './batch-programs.component';

describe('BatchProgramsComponent', () => {
  let component: BatchProgramsComponent;
  let fixture: ComponentFixture<BatchProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchProgramsComponent]
    });
    fixture = TestBed.createComponent(BatchProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
