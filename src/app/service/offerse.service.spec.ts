import { TestBed } from '@angular/core/testing';

import { OfferseService } from './offerse.service';

describe('OfferseService', () => {
  let service: OfferseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
