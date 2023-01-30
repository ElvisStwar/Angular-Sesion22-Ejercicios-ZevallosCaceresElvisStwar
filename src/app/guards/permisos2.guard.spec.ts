import { TestBed } from '@angular/core/testing';

import { Permisos2Guard } from './permisos2.guard';

describe('Permisos2Guard', () => {
  let guard: Permisos2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Permisos2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
