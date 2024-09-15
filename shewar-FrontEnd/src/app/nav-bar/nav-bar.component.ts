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

  toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    searchBox?.classList.toggle('active');
  }
  

  getOrdersCount(){
    return this.productService.getOrderCount();
  }

  goHome(){
    this.productService.setHomeContainer('home');
  }

  showMyOrders(){
    this.productService.setHomeContainer('my-order');
  }

}
