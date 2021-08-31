/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionTypeService } from './permissionType.service';

describe('Service: PermissionType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionTypeService]
    });
  });

  it('should ...', inject([PermissionTypeService], (service: PermissionTypeService) => {
    expect(service).toBeTruthy();
  }));
});
