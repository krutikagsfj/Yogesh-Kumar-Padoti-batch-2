import { TestBed } from '@angular/core/testing';

import { MobileserviceService } from './mobileservice.service';

describe('MobileserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileserviceService = TestBed.get(MobileserviceService);
    expect(service).toBeTruthy();
  });
});
