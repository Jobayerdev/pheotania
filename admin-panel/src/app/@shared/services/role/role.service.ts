import { ICreateRole, IUpdateRole } from './../../interfaces/Roles.interfaces';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService<ICreateRole, IUpdateRole> {
  readonly END_POINT = `${environment.API_ENDPOINT}roles/`;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
