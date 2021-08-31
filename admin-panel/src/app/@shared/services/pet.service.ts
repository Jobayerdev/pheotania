import { ICreatePet, IUpdatePet } from './../interfaces/pet-interfaces';

import { BaseService } from './base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PetService extends BaseService<ICreatePet, IUpdatePet> {
  readonly END_POINT = `${environment.API_ENDPOINT}pet/`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
