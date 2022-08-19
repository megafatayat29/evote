import { TestBed } from '@angular/core/testing';

import { VerifiedEmailService } from './verified-email.service';

describe('VerifiedEmailServiceService', () => {
  let service: VerifiedEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifiedEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
