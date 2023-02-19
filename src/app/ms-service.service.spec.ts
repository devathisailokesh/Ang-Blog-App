import { TestBed } from '@angular/core/testing';

import { MsServiceService } from './ms-service.service';

describe('MsServiceService', () => {
  let service: MsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
