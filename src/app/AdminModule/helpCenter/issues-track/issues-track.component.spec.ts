import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesTrackComponent } from './issues-track.component';

describe('IssuesTrackComponent', () => {
  let component: IssuesTrackComponent;
  let fixture: ComponentFixture<IssuesTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesTrackComponent]
    });
    fixture = TestBed.createComponent(IssuesTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
