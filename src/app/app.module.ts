import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './common/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database/database.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './state/user/user.effects';
import { userReducer } from './state/user/user.reducers';
import { ProductEffects } from './state/products/products.effects';
import { productReducer } from './state/products/products.reducers';
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
