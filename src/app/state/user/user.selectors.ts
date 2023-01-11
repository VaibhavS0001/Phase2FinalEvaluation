import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(
  getUserFeatureState,
  (state) => state.users
);

export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
