import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

/**
 * Routes to various components and lazily loaded modules 
 */
const routes: Routes = [
  /**
   * Login component
   */
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  /**
   * Home component
   */
  { path: 'home', component: HomeComponent },

  /**
   * Products Module
   */
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },

  /**
   * Shared Module
   */
  {
    path: 'shared',
    loadChildren: () =>
      import('./common/shared.module').then((m) => m.SharedModule),
  },

  /**
   * Page Not Found Component
   */
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
