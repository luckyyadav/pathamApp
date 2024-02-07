import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupComponent } from './item-group.component';

describe('ItemGroupComponent', () => {
  let component: ItemGroupComponent;
  let fixture: ComponentFixture<ItemGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemGroupComponent]
    });
    fixture = TestBed.createComponent(ItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
