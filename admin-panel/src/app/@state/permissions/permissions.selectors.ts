import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IBaseFilterPayload } from '@shared/interfaces/base.interfaces';

export const PERMISSION_STATE_NAME = 'Permissions';

const selectPermissionState = createFeatureSelector<IBaseFilterPayload>(
  PERMISSION_STATE_NAME
);

export const selectPermissions = createSelector(
  selectPermissionState,
  (state: IBaseFilterPayload) => ({
    data: state.data,
    page: state.page,
    take: state.take,
    total: state.total,
  })
);
