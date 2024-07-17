import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrl: './order-completed.component.css'
})
export class OrderCompletedComponent {
  constructor(private productService: ProductService){}

  ngOnInit(){
    let products = this.productService.getAllProducts();
    let order : Order = {
      products : products,
      time: new Date().toISOString(),
      expanded : false
    }
    this.productService.addOrder(order);
  }

  goBackToShopping(){
    this.productService.setHomeContainer('home');
  }
}
