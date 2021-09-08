import { AuthCredential } from '../../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly END_POINT = `${environment.API_ENDPOINT}auth/login`;
  constructor(private readonly http: HttpClient, private router: Router) {}
  adminLogin(authCredential: AuthCredential) {
    return this.http.post(`${this.END_POINT}`, authCredential).pipe(
      tap((x: any) => {
        localStorage.setItem('token', String(x?.payload?.token));
      }),
    );
  }
  //*Utils
  logout() {
    window.localStorage.clear();
    this.router.navigate(['/']);
  }
  isUserLoggedIn(): boolean {
    return this.getUserToken()?.length > 0;
  }
  getUserToken(): any {
    return localStorage.getItem('token');
  }
  getUserDecodedToken() {
    const token: any = localStorage.getItem('token');
    return this.getUserToken() ? jwt_decode(token) : false;
  }
  getUserPermissions() {
    try {
      //1st layer token decoded for getting permission token.
      const decodedMainToken: any = this.getUserDecodedToken();
      //decoded permission token
      const decodePermissions: any = jwt_decode(
        String(decodedMainToken.permissions),
      );
      return decodePermissions.permissions;
    } catch (error) {
      return [];
    }
  }
}
