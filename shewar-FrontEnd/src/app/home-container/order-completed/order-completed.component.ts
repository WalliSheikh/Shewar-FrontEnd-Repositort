import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrl: './order-completed.component.css'
})
export class OrderCompletedComponent {
  constructor(private productService: ProductService){}
  goBackToShopping(){
    this.productService.setHomeContainer('home');
  }
}
