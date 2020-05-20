import { TestBed } from '@angular/core/testing';

import { ProvApiService } from './prov-api.service';

describe('ProvApiService', () => {
  let service: ProvApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
