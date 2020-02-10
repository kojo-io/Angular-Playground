import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDateComponent } from './ag-date.component';

describe('AgDateComponent', () => {
  let component: AgDateComponent;
  let fixture: ComponentFixture<AgDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
