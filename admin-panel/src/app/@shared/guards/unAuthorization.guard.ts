import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { PathsEnum } from '../enums/paths.enum';

@Injectable({
  providedIn: 'root',
})
export class UnAuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate([PathsEnum.defaultDashboard]);
      return false;
    } else {
      return true;
    }
  }
}
