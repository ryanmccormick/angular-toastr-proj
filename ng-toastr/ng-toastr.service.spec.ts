import { TestBed, inject } from '@angular/core/testing';

import { NgToastrService } from './ng-toastr.service';

describe('NgToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgToastrService]
    });
  });

  it('should be created', inject([NgToastrService], (service: NgToastrService) => {
    expect(service).toBeTruthy();
  }));
});
