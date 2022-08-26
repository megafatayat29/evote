import { TestBed } from '@angular/core/testing';

import { PesertaServiceService } from './peserta-service.service';

describe('PesertaServiceService', () => {
  let service: PesertaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesertaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
