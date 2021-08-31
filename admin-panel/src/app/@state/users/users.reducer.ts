import { Action, createReducer, on } from '@ngrx/store';
import {
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces/base.interfaces';
import {
  createUserSuccessAction,
  deleteUserSuccessAction,
  loadUsersSuccessAction,
  updateUserSuccessAction,
} from './users.actions';

import { UsersInitialState } from './users.state';
import { replacedArrayMatchedItem } from '@shared/utils/util-function';

const _usersReducer = createReducer(
  UsersInitialState,

  // Load
  on(
    loadUsersSuccessAction,
    (state: IBaseFilterPayload, action: IBaseResponse) => {
      return {
        ...state,
        data: action.payload,
      };
    }
  ),
  // Delete
  on(deleteUserSuccessAction, (state: IBaseFilterPayload, action: any) => {
    return {
      ...state,
      data: state.data.filter((x) => x.id !== action.id),
    };
  }),
  // Create
  on(createUserSuccessAction, (state: IBaseFilterPayload, action: any) => {
    return {
      ...state,
      data: [...state?.data, action?.data],
    };
  }),

  // Update
  on(updateUserSuccessAction, (state: IBaseFilterPayload, action: any) => {
    return {
      ...state,
      data: replacedArrayMatchedItem(state.data, action?.payload),
    };
  })
);

export const usersReducer = (state: IBaseFilterPayload, action: Action) => {
  return _usersReducer(state, action);
};
