import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAlertsComponent } from './active-alerts.component';

describe('ActiveAlertsComponent', () => {
  let component: ActiveAlertsComponent;
  let fixture: ComponentFixture<ActiveAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
