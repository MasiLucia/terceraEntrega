import { TestBed } from '@angular/core/testing';

import { LordValdomeroGuard } from './lord-valdomero.guard';

xdescribe('LordValdomeroGuard', () => {
  let guard: LordValdomeroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LordValdomeroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
