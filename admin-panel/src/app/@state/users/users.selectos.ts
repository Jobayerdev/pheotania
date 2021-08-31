import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IBaseFilterPayload } from '@shared/interfaces/base.interfaces';

export const USERS_STATE_NAME = 'Users';

const selectUserState =
  createFeatureSelector<IBaseFilterPayload>(USERS_STATE_NAME);

export const selectUsers = createSelector(
  selectUserState,
  (state: IBaseFilterPayload) => ({
    data: state.data,
    page: state.page,
    take: state.take,
    total: state.total,
  })
);
