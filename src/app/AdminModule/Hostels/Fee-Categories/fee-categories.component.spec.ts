import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCategoriesComponent } from './fee-categories.component';

describe('FeeCategoriesComponent', () => {
  let component: FeeCategoriesComponent;
  let fixture: ComponentFixture<FeeCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeeCategoriesComponent]
    });
    fixture = TestBed.createComponent(FeeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
