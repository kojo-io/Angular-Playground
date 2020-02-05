import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared';
import {MainRoutingModule} from './main-routing.module';
import {LayoutModule} from '../shared/layout/layout.module';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
    ]
  }));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});
