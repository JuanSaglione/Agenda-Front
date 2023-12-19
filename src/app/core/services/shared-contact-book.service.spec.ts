import { TestBed } from '@angular/core/testing';

import { SharedContactBookService } from './shared-contact-book.service';

describe('SharedContactBookService', () => {
  let service: SharedContactBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedContactBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
