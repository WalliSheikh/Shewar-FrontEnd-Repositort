import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: any[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    this.products.forEach(product => {
      product.quantity = product.quantity.toString();
    });

  }
  goBack() {
    this.productService.setProducts(this.products);
    this.productService.setHomeContainer('home');
  }

  continueShopping(){
    this.productService.setProducts(this.products);
    this.productService.setHomeContainer('continue');
  }

  getValue(product: any): void {
    product.totalPrice = product.price * product.quantity;
  }

  increaseQuantity(product : any){
    product.quantity++;
    this.getValue(product)
  }

  decreaseQuantity(product : any){
    product.quantity--;
    this.getValue(product)
  }

  deleteProduct(product: any) {
    this.products = this.products.filter((item: any) => item !== product);
    this.productService.setProducts(this.products);
    if (this.products.length === 0) {
      this.continueShopping();
    }
  }

  checkOut(){
    this.productService.setProducts(this.products);
    this.productService.setHomeContainer('check-out');
  }
}
