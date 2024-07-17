import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
constructor(private productService:ProductService){
}
totalPayment:number = this.productService.getCheckOutPayment();
products = this.productService.getAllProducts();
goBack(){
  this.productService.setHomeContainer('home');
}
confirmOrder(){
  this.productService.setHomeContainer('confirm-order');
}
}
