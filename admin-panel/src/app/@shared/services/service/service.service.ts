import { ICreateService, IUpdateService } from '@shared/interfaces';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService extends BaseService<
  ICreateService,
  IUpdateService
> {
  readonly END_POINT = `${environment.API_ENDPOINT}services/`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
