import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteZonesComponent } from './route-zones.component';

describe('RouteZonesComponent', () => {
  let component: RouteZonesComponent;
  let fixture: ComponentFixture<RouteZonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteZonesComponent]
    });
    fixture = TestBed.createComponent(RouteZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
