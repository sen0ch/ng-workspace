import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('TableHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
