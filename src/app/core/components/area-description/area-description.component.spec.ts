import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDescriptionComponent } from './area-description.component';

describe('AreaDescriptionComponent', () => {
  let component: AreaDescriptionComponent;
  let fixture: ComponentFixture<AreaDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
