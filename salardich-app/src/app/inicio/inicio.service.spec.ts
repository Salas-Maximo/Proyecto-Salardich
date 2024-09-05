import { TestBed } from '@angular/core/testing';

import { SangucheService } from './inicio.service';

describe('InicioService', () => {
  let service: SangucheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SangucheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
