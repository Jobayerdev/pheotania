import {
  ICreatePetTypes,
  IUpdatePetTypes,
} from './../interfaces/pet-types.interfaces';

import { BaseService } from './base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PetTypeService extends BaseService<
  ICreatePetTypes,
  IUpdatePetTypes
> {
  readonly END_POINT = `${environment.API_ENDPOINT}petTypes/`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
