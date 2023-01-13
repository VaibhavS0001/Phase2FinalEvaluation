import { IProduct } from 'src/app/products/product.model';
import * as AppState from '../app.state';

export interface State extends AppState.AppState {
  cart: CartState;
}
export interface CartState {
  currentProductId: number | null;
  products: IProduct[];
  error: string;
}

export const initialState: CartState = {
  currentProductId: null,
  products: [],
  error: '',
};
