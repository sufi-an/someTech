import { TestBed } from '@angular/core/testing';

import { CheckAuthAccessGuard } from './check-auth-access.guard';

describe('CheckAuthAccessGuard', () => {
  let guard: CheckAuthAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckAuthAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
