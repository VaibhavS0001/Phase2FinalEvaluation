/**
 * Default Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * State Management
 */
import { productReducer } from '../state/products/products.reducers';
import { ProductEffects } from '../state/products/products.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

/**
 * Custom imports
 */
import { SharedModule } from '../common/shared.module';
import { CartComponent } from './cart/cart.component';
import { ProductRoutingModule } from './products.routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ]
})
export class ProductsModule { }
