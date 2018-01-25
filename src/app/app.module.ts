import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MoviesComponent } from './movies/movies.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MoviesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule, routes, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
