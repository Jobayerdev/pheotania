import {
  ICreateServiceDepartment,
  IUpdateServiceDepartment,
} from './../../interfaces/serviceDepartments.interfaces';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceDepartmentsService extends BaseService<
  ICreateServiceDepartment,
  IUpdateServiceDepartment
> {
  readonly END_POINT = `${environment.API_ENDPOINT}serviceDepartments/`;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
