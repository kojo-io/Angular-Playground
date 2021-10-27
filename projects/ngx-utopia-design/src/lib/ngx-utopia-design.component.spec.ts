import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUtopiaDesignComponent } from './ngx-utopia-design.component';

describe('NgxUtopiaDesignComponent', () => {
  let component: NgxUtopiaDesignComponent;
  let fixture: ComponentFixture<NgxUtopiaDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUtopiaDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUtopiaDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
