import { Action, createReducer, on } from '@ngrx/store';
import {
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces/base.interfaces';
import {
  createPermissionSuccessAction,
  deletePermissionSuccessAction,
  loadPermissionsSuccessAction,
} from './permissions.actions';

const initialState: IBaseFilterPayload = {
  data: [],
  page: 0,
  take: 0,
  total: 0,
};

const _permissionReducer = createReducer(
  initialState,

  // Load
  on(
    loadPermissionsSuccessAction,
    (state: IBaseFilterPayload, action: IBaseResponse) => {
      return {
        ...state,
        data: action.payload,
      };
    }
  ),
  // Create
  on(
    createPermissionSuccessAction,
    (state: IBaseFilterPayload, action: IBaseResponse) => {
      return {
        ...state,
        data: [...state?.data, action?.payload?.data],
      };
    }
  ),
  // Delete
  on(
    deletePermissionSuccessAction,
    (state: IBaseFilterPayload, action: IBaseResponse) => {
      return {
        ...state,
        data: state.data.filter((x) => x.id !== action.payload.id),
      };
    }
  )
);

export const permissionReducer = (
  state: IBaseFilterPayload,
  action: Action
) => {
  return _permissionReducer(state, action);
};
