import { TestBed } from '@angular/core/testing';

import { DataNavService } from './data-nav.service';

describe('DataNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataNavService = TestBed.get(DataNavService);
    expect(service).toBeTruthy();
  });
});
