/**
 * Default imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Custom Components and Modules
 */
import { HomeComponent } from './home/home.component';
import { SharedModule } from './common/shared.module';

/**
 * Service Management
 */
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database/database.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

/**
 * Store Management
 */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './state/user/user.effects';
import { userReducer } from './state/user/user.reducers';
import { ProductEffects } from './state/products/products.effects';
import { productReducer } from './state/products/products.reducers';

/**
 * For carousel effects
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('users', userReducer),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forRoot([UserEffects, ProductEffects]),
    HttpClientInMemoryWebApiModule.forRoot(DatabaseService),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
