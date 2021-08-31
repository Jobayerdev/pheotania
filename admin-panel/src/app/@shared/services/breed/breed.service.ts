import {
  ICreateBreed,
  IUpdateBreed,
} from './../../interfaces/breed.interfaces';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BreedService extends BaseService<ICreateBreed, IUpdateBreed> {
  readonly END_POINT = `${environment.API_ENDPOINT}breeds/`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
