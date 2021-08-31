import { ICreateUser, IUpdateUser } from '@shared/interfaces/Users.interfaces';

import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService<ICreateUser, IUpdateUser> {
  readonly END_POINT = `${environment.API_ENDPOINT}users/`;

  constructor(protected readonly http: HttpClient) {
    super(http);
  }
}
