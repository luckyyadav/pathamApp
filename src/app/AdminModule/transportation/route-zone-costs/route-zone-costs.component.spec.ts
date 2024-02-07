import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteZoneCostsComponent } from './route-zone-costs.component';

describe('RouteZoneCostsComponent', () => {
  let component: RouteZoneCostsComponent;
  let fixture: ComponentFixture<RouteZoneCostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteZoneCostsComponent]
    });
    fixture = TestBed.createComponent(RouteZoneCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
