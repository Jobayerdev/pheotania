import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '@shared/services/auth/auth.service';
import { hasAccessPermission } from '../utils/util-function';

@Directive({
  selector: '[permissions]',
})
export class PermissionDirective {
  allowedRoles!: string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  @Input()
  set accessPermissions(accessList: string[]) {
    const isUserLoggedIn = this.authService.isUserLoggedIn;
    const userPermissions = this.authService.getUserPermissions();

    if (!accessList || accessList.length === 0 || !isUserLoggedIn) {
      this.viewContainer.clear();
      return;
    }

    const hasAccess: boolean = hasAccessPermission(accessList, userPermissions);

    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
