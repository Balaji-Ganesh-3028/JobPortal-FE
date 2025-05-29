import { TestBed } from '@angular/core/testing';

import { MatSpinnerService } from './mat-spinner.service';

describe('MatSpinnerService', () => {
  let service: MatSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
