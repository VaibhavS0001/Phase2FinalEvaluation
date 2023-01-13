import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import * as ProductActions from './cart.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private pService: ProductService) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadCartProducts),
      mergeMap(() =>
        this.pService.getProducts().pipe(
          map((cart_products) =>
            ProductActions.loadCartProductsSuccess({ cart_products })
          ),
          catchError((error) =>
            of(ProductActions.loadCartProductsFailure({ error }))
          )
        )
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      concatMap((action) => {
        return this.pService.updateProduct(action.cart_product).pipe(
          map(() => action.cart_product),
          map((cart_product) =>
            ProductActions.updateProductSuccess({ cart_product })
          ),
          catchError((error) =>
            of(ProductActions.updateProductFailure({ error }))
          )
        );
      })
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.createProduct),
      concatMap((action) =>
        this.pService.createProduct(action.cart_product).pipe(
          map((cart_product) =>
            ProductActions.createProductSuccess({ cart_product })
          ),
          catchError((error) =>
            of(ProductActions.createProductFailure({ error }))
          )
        )
      )
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap((action) =>
        this.pService.deleteProduct(action.cart_productId).pipe(
          map(() =>
            ProductActions.deleteProductSuccess({
              cart_productId: action.cart_productId,
            })
          ),
          catchError((error) =>
            of(ProductActions.deleteProductFailure({ error }))
          )
        )
      )
    );
  });
}
