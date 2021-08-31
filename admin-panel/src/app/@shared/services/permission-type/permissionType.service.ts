import {
  ICreatePermissionType,
  IUpdatePermissionType,
} from './../../interfaces/permission-type.interfaces';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PermissionTypeService extends BaseService<
  ICreatePermissionType,
  IUpdatePermissionType
> {
  readonly END_POINT = `${environment.API_ENDPOINT}permission-types/`;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
