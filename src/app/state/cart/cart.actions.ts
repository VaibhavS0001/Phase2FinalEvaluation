import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/products/product.model';

export const loadCartProducts = createAction('[CartProducts] Load');

export const loadCartProductsSuccess = createAction(
  '[CartProducts] Load Success',
  props<{ cart_products: IProduct[] }>()
);

export const loadCartProductsFailure = createAction(
  '[CartProducts] Load Fail',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[CartProducts] Update Product',
  props<{ cart_product: IProduct }>()
);

export const updateProductSuccess = createAction(
  '[CartProducts] Update Product Success',
  props<{ cart_product: IProduct }>()
);

export const updateProductFailure = createAction(
  '[CartProducts] Update Product Fail',
  props<{ error: string }>()
);

export const createProduct = createAction(
  '[CartProducts] Create Product',
  props<{ cart_product: IProduct }>()
);

export const createProductSuccess = createAction(
  '[CartProducts] Create Product Success',
  props<{ cart_product: IProduct }>()
);

export const createProductFailure = createAction(
  '[CartProducts] Create Product Fail',
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  '[CartProducts] Delete Product',
  props<{ cart_productId: number }>()
);

export const deleteProductSuccess = createAction(
  '[CartProducts] Delete Product Success',
  props<{ cart_productId: number }>()
);

export const deleteProductFailure = createAction(
  '[CartProducts] Delete Product Fail',
  props<{ error: string }>()
);
