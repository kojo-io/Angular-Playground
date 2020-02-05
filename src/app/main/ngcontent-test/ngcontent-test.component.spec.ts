import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentTestComponent } from './ngcontent-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ProjectContentComponent} from './project-content/project-content.component';

describe('NgcontentTestComponent', () => {
  let component: NgcontentTestComponent;
  let fixture: ComponentFixture<NgcontentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentTestComponent, ProjectContentComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
