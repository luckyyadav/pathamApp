import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeGroupsComponent } from './fee-groups.component';

describe('FeeGroupsComponent', () => {
  let component: FeeGroupsComponent;
  let fixture: ComponentFixture<FeeGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeeGroupsComponent]
    });
    fixture = TestBed.createComponent(FeeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
