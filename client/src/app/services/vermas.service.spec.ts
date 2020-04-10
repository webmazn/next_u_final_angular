import { TestBed } from '@angular/core/testing';

import { VermasService } from './vermas.service';

describe('VermasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VermasService = TestBed.get(VermasService);
    expect(service).toBeTruthy();
  });
});
