import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private productService : ProductService){
  }

  getOrdersCount(){
    return this.productService.getOrderCount();
  }

  showMyOrders(){
    this.productService.setHomeContainer('my-order');
  }

}
