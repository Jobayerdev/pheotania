/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetTypeService } from './pet-type.service';

describe('Service: PetType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetTypeService]
    });
  });

  it('should ...', inject([PetTypeService], (service: PetTypeService) => {
    expect(service).toBeTruthy();
  }));
});
