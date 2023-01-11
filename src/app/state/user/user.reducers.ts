import { createReducer, on } from '@ngrx/store';
import { initialState } from './user.state';
import { UserState } from './user.state';
import * as UserActions from './user.actions';

export const userReducer = createReducer(
  initialState,

  //     on(UserActions.loadUsers, (state)=>({
  //       ...state,
  //       users: [],
  //       error: ''
  // })),
  on(UserActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users,
      error: '',
    };
  }),
  on(UserActions.loadUsersFailure, (state, action): UserState => {
    return {
      ...state,
      users: [],
      error: action.error,
    };
  }),
  on(UserActions.updateUserSuccess, (state, action): UserState => {
    const updatedUsers = state.users.map((item) =>
      action.user.id === item.id ? action.user : item
    );
    return {
      ...state,
      users: updatedUsers,
      currentUserId: action.user.id,
      error: '',
    };
  }),
  on(UserActions.updateUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(UserActions.createUserSuccess, (state, action): UserState => {
    return {
      ...state,
      users: [...state.users, action.user],
      currentUserId: action.user.id,
      error: '',
    };
  }),
  on(UserActions.createUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(UserActions.deleteUserSuccess, (state, action): UserState => {
    return {
      ...state,
      users: state.users.filter(
        (user) => user.id !== action.userId
      ),
      currentUserId: null,
      error: '',
    };
  }),
  on(UserActions.deleteUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
