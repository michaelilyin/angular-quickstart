import { TestBed, inject } from '@angular/core/testing';

import { RouteDialogService } from './route-dialog.service';

describe('RouteDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteDialogService]
    });
  });

  it('should be created', inject([RouteDialogService], (service: RouteDialogService) => {
    expect(service).toBeTruthy();
  }));
});
