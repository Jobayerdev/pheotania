import { HttpClient } from '@angular/common/http';
import { IBaseFilter } from '@shared/interfaces/base.interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseFilterQueryUtils } from '@shared/utils/util-function';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<ICreatUser, IUpdateUser> {
  END_POINT = environment.API_ENDPOINT;

  constructor(protected readonly http: HttpClient) {}
  filter(options: IBaseFilter) {
    return this.http.get(`${this.END_POINT}?${baseFilterQueryUtils(options)}`);
  }
  getById(id: string) {
    return this.http.get(this.END_POINT + id);
  }

  create(payload: ICreatUser): Observable<any> {
    return this.http.post(this.END_POINT, payload);
  }

  update(id: string, payload: IUpdateUser): Observable<any> {
    return this.http.put(this.END_POINT + id, payload);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.END_POINT + id);
  }
}
