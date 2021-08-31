import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createPermissionAction,
  createPermissionSuccessAction,
  deletePermissionAction,
  deletePermissionSuccessAction,
  loadPermissionsAction,
  loadPermissionsSuccessAction,
} from './permissions.actions';
import { map, mergeMap } from 'rxjs/operators';

import { IBaseResponse } from '@shared/interfaces/base.interfaces';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { PermissionsService } from '@shared/services/permissions/permissions.service';
import { Router } from '@angular/router';
import { StaticEnum } from '@shared/enums/static.enum';

@Injectable()
export class PermissionsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly permissionsService: PermissionsService,
    private readonly notificationService: NzNotificationService,
    private readonly routes: Router
  ) {}

  //!Load Permissions
  loadPermissions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPermissionsAction),
      mergeMap((action) => {
        return this.permissionsService
          .filter({
            page: 1,
            take: 10,
          })
          .pipe(
            map((response: IBaseResponse) => {
              return loadPermissionsSuccessAction(response);
            })
          );
      })
    );
  });

  //! Create Permission
  createPermission$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPermissionAction),
      mergeMap((action) => {
        return this.permissionsService
          .create({
            title: action.title,
            permissionType: action.permissionType,
          })
          .pipe(
            map((response: IBaseResponse) => {
              setTimeout(() => {
                this.routes.navigate([PathsEnum.users]);
              }, 1000);
              this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
              return createPermissionSuccessAction(response);
            })
          );
      })
    );
  });

  //! Delete
  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePermissionAction),
      mergeMap((action) => {
        return this.permissionsService.delete(action.id).pipe(
          map((response: IBaseResponse) => {
            this.notificationService.success(StaticEnum.DELETED_SUCCESS, '');
            return deletePermissionSuccessAction(response);
          })
        );
      })
    );
  });
}
