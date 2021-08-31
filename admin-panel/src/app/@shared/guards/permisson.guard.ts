import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { hasAccessPermission } from '../utils/util-function';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const allowedPermissions = route.data['roles'];
    const permissions = this.authService.getUserPermissions();
    return hasAccessPermission(allowedPermissions, permissions);
  }
}
