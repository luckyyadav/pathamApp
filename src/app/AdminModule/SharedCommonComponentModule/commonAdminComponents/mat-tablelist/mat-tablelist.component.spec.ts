import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTablelistComponent } from './mat-tablelist.component';

describe('MatTablelistComponent', () => {
  let component: MatTablelistComponent;
  let fixture: ComponentFixture<MatTablelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatTablelistComponent]
    });
    fixture = TestBed.createComponent(MatTablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
