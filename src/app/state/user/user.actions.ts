import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/user/user.model';

export const loadUsers = createAction('[User] Load');

export const loadUsersSuccess = createAction(
  '[User] Load Success',
  props<{ users: IUser[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Fail',
  props<{ error: string }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: IUser }>()
);

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{ user: IUser }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Fail',
  props<{ error: string }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{ user: IUser }>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ user: IUser }>()
);

export const createUserFailure = createAction(
  '[User] Create User Fail',
  props<{ error: string }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{ userId: number }>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ userId: number }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Fail',
  props<{ error: string }>()
);
