/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceDepartmentsService } from './serviceDepartments.service';

describe('Service: ServiceDepartments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDepartmentsService]
    });
  });

  it('should ...', inject([ServiceDepartmentsService], (service: ServiceDepartmentsService) => {
    expect(service).toBeTruthy();
  }));
});
