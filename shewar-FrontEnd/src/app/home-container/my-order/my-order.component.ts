import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent {
orders : Order[] = this.productService.getAllOrders();
constructor(private productService : ProductService){}

// ngOnInit(){
//   this.orders = this.productService.getAllOrders();
//   console.log(this.orders); 
// }

}
