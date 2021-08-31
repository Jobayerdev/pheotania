import { IBaseFilter, IBaseResponse } from '@shared/interfaces/base.interfaces';
import { createAction, props } from '@ngrx/store';

import { ICreatePermission } from '@shared/interfaces/Permissions.interface';

export const loadPermissionsAction = createAction(
  '[Permissions Page] Load Permissions',
  props<IBaseFilter>()
);

export const loadPermissionsSuccessAction = createAction(
  '[Permission Page] Load Permissions Success Page',
  props<IBaseResponse>()
);

export const createPermissionAction = createAction(
  '[Permission Page] Create Permission ',
  props<ICreatePermission>()
);

export const createPermissionSuccessAction = createAction(
  '[Permission Page] Create Permission Success',
  props<IBaseResponse>()
);

export const deletePermissionAction = createAction(
  '[Permission Page] Delete Permission',
  props<{ id: string }>()
);
export const deletePermissionSuccessAction = createAction(
  '[Permission Page] Delete Permission Success',
  props<IBaseResponse>()
);
