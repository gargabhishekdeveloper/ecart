import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { CartComponent } from './cart/cart.component';
import { MoviesComponent } from './movies/movies.component';
import { OrdersComponent } from './orders/orders.component';

//import {FirstpageComponent} from './firstpage/firstpage.component';
//import { SecondpageComponent } from './secondpage/secondpage.component';


export const router: Routes =[
    { path:'',  component: AppComponent},
    { path:'cart', component: CartComponent},
    { path:'movies', component: MoviesComponent},
    { path:'orders', component: OrdersComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);