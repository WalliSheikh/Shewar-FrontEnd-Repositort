import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductsComponent } from './home-container/products/products.component';
import { FooterComponent } from './footer/footer.component';
import { HomeLayoutComponent } from './home-container/home-layout/home-layout.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { CartComponent } from './home-container/cart/cart.component';
import { ProductService } from './services/product.service';
import { CheckOutComponent } from './home-container/check-out/check-out.component';
import { ConfirmOrderComponent } from './home-container/confirm-order/confirm-order.component';
import { OrderCompletedComponent } from './home-container/order-completed/order-completed.component';
import { MyOrderComponent } from './home-container/my-order/my-order.component';
import { CategoriesComponent } from './home-container/categories/categories.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeContainerComponent,
    ProductsComponent,
    FooterComponent,
    HomeLayoutComponent,
    CartComponent,
    CheckOutComponent,
    ConfirmOrderComponent,
    OrderCompletedComponent,
    MyOrderComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    SatPopoverModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
