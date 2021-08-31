import {
  ICreatePermission,
  IUpdatePermission,
} from './../../interfaces/Permissions.interface';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService extends BaseService<
  ICreatePermission,
  IUpdatePermission
> {
  readonly END_POINT = `${environment.API_ENDPOINT}permissions/`;

  constructor(protected http: HttpClient) {
    super(http);
  }
  userPermissions(id: string) {
    return this.http.get(`${this.END_POINT}user-permissions/${id}`);
  }
}
