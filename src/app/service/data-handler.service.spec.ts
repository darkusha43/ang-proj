import { TestBed } from '@angular/core/testing';

import { DataHandlerService } from '../service/data-handler.service';

describe('DataHandlerService', () => {
  let service: DataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
