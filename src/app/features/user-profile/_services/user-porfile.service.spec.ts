import { TestBed } from '@angular/core/testing';

import { UserPorfileService } from './user-porfile.service';

describe('UserPorfileService', () => {
  let service: UserPorfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPorfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
