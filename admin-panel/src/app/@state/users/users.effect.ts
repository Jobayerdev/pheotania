import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createUserAction,
  createUserSuccessAction,
  deleteUserAction,
  deleteUserSuccessAction,
  loadUsersAction,
  loadUsersSuccessAction,
  updateUserAction,
  updateUserSuccessAction,
} from './users.actions';
import { map, mergeMap } from 'rxjs/operators';

import { IBaseResponse } from '@shared/interfaces/base.interfaces';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { Router } from '@angular/router';
import { StaticEnum } from '@shared/enums/static.enum';
import { UsersService } from '@shared/services/users/users.service';

@Injectable()
export class UsersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService,
    private readonly notificationService: NzNotificationService,
    private readonly routes: Router
  ) {}

  //!load
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsersAction),
      mergeMap((action) => {
        return this.usersService
          .filter({
            page: 1,
            take: 10,
          })
          .pipe(
            map((response: IBaseResponse) => {
              return loadUsersSuccessAction({
                payload: response.payload,
              });
            })
          );
      })
    );
  });

  //! Delete
  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUserAction),
      mergeMap((action) => {
        return this.usersService.delete(action.id).pipe(
          map(() => {
            this.notificationService.success(StaticEnum.DELETED_SUCCESS, '');
            return deleteUserSuccessAction({ id: action.id });
          })
        );
      })
    );
  });

  //! Create
  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUserAction),
      mergeMap((action) =>
        this.usersService.create(action).pipe(
          map((payload) => {
            this.notificationService.success(StaticEnum.CREATED_SUCCESS, '');
            setTimeout(() => {
              this.routes.navigate([PathsEnum.users]);
            }, 1000);
            return createUserSuccessAction({ data: payload });
          })
        )
      )
    );
  });

  //!Update
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUserAction),
      mergeMap((action) => {
        return this.usersService
          .update(action.id, { name: action.name, email: action.email })
          .pipe(
            map((payload: IBaseResponse) => {
              this.notificationService.success(StaticEnum.UPDATED_SUCCESS, '');
              setTimeout(() => {
                this.routes.navigate([PathsEnum.users]);
              }, 1000);
              return updateUserSuccessAction(payload);
            })
          );
      })
    );
  });
}
