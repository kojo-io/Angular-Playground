import { TestBed } from '@angular/core/testing';

import { NgxUtopiaDesignService } from './ngx-utopia-design.service';

describe('NgxUtopiaDesignService', () => {
  let service: NgxUtopiaDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUtopiaDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
