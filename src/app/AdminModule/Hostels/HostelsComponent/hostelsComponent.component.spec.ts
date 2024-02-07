import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelsComponent } from './hostelsComponent.component';

describe('HostelsComponent', () => {
  let component: HostelsComponent;
  let fixture: ComponentFixture<HostelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostelsComponent]
    });
    fixture = TestBed.createComponent(HostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
