import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    FeaturedProductsComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContactComponent,
    LoginComponent,
    SliderComponent,
    TopBarComponent,
    CategoriesComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
