import { TestBed } from '@angular/core/testing';

import { ShowFilmsService } from './show-films.service';

describe('ShowFilmsService', () => {
  let service: ShowFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
