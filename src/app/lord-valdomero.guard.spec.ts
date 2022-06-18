import { TestBed } from '@angular/core/testing';

import { LordValdomeroGuard } from './lord-valdomero.guard';

describe('LordValdomeroGuard', () => {
  let guard: LordValdomeroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LordValdomeroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
