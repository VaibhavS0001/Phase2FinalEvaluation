import { createReducer, on } from '@ngrx/store';
import { initialState } from './cart.state';
import { CartState } from './cart.state';
import * as ProductActions from './cart.actions';

export const productReducer = createReducer(
  initialState,

  //     on(ProductActions.loadcartProducts, (state)=>({
  //       ...state,
  //       products: [],
  //       error: ''
  // })),
  on(ProductActions.loadCartProductsSuccess, (state, action): CartState => {
    return {
      ...state,
      products: action.cart_products,
      error: '',
    };
  }),
  on(ProductActions.loadCartProductsFailure, (state, action): CartState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),
  on(ProductActions.updateProductSuccess, (state, action): CartState => {
    const updatedCartProducts = state.products.map((item) =>
      action.cart_product.id === item.id ? action.cart_product : item
    );
    return {
      ...state,
      products: updatedCartProducts,
      currentProductId: action.cart_product.id,
      error: '',
    };
  }),
  on(ProductActions.updateProductFailure, (state, action): CartState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductActions.createProductSuccess, (state, action): CartState => {
    return {
      ...state,
      products: [...state.products, action.cart_product],
      currentProductId: action.cart_product.id,
      error: '',
    };
  }),
  on(ProductActions.createProductFailure, (state, action): CartState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductActions.deleteProductSuccess, (state, action): CartState => {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.cart_productId
      ),
      currentProductId: null,
      error: '',
    };
  }),
  on(ProductActions.deleteProductFailure, (state, action): CartState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
