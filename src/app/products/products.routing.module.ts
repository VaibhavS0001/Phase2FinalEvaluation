import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  /**
   * Product list component
   */
  {
    path: 'productList/:category',
    component: ProductListComponent,
  },
  /**
   * Cart list component
   */
  {
    path: 'cart',
    component: CartComponent,
    children:[
      {path: 'checkout/:total', component: CheckoutComponent, canActivate: [AuthGuardService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
