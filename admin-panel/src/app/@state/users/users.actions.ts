import { IBaseFilter, IBaseResponse } from '@shared/interfaces/base.interfaces';
import { ICreateUser, IUpdateUser } from '@shared/interfaces/Users.interfaces';
import { createAction, props } from '@ngrx/store';

export const loadUsersAction = createAction(
  '[User Page] Load User',
  props<IBaseFilter>()
);
export const loadUsersSuccessAction = createAction(
  '[User Page] Load User Success',
  props<IBaseResponse>()
);

export const deleteUserAction = createAction(
  '[User Page] Delete User',
  props<{ id: string }>()
);

export const deleteUserSuccessAction = createAction(
  '[User Page] Delete User Success',
  props<{ id: string }>()
);

export const createUserAction = createAction(
  '[User Page] Create user',
  props<ICreateUser>()
);
export const createUserSuccessAction = createAction(
  '[User Page] Create user success',
  props<{ data: any }>()
);

export const updateUserAction = createAction(
  '[User Page] Update User Action',
  props<IUpdateUser>()
);
export const updateUserSuccessAction = createAction(
  '[User Page] Update User Success Action',
  props<IBaseResponse>()
);
