import { TestBed } from '@angular/core/testing';

import { BookingServService } from './booking-serv.service';

describe('BookingServService', () => {
  let service: BookingServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
