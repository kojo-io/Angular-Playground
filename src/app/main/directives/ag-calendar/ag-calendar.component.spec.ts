import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCalendarComponent } from './ag-calendar.component';

describe('AgCalendarComponent', () => {
  let component: AgCalendarComponent;
  let fixture: ComponentFixture<AgCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
