import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { OrderHistory } from './order-history.resolver';

describe('OrderHistory', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => OrderHistory(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
