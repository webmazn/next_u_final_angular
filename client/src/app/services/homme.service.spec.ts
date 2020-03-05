import { TestBed } from '@angular/core/testing';

import { HommeService } from './homme.service';

describe('HommeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HommeService = TestBed.get(HommeService);
    expect(service).toBeTruthy();
  });
});
