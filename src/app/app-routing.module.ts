import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductListComponent },
  { path: 'productos/:id', component: ProductDetailComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
