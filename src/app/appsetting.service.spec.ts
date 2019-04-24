import { TestBed } from '@angular/core/testing';

import { AppsettingService } from './appsetting.service';

describe('AppsettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsettingService = TestBed.get(AppsettingService);
    expect(service).toBeTruthy();
  });
});
