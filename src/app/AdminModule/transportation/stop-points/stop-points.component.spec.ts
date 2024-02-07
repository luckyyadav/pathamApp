import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPointsComponent } from './stop-points.component';

describe('StopPointsComponent', () => {
  let component: StopPointsComponent;
  let fixture: ComponentFixture<StopPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopPointsComponent]
    });
    fixture = TestBed.createComponent(StopPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
