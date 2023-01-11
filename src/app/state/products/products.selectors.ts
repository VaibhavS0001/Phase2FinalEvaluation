import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.error
);
