import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const getCartFeatureState = createFeatureSelector<CartState>('products');

export const getCartProducts = createSelector(
  getCartFeatureState,
  (state) => state.products
);

export const getError = createSelector(
  getCartFeatureState,
  (state) => state.error
);
