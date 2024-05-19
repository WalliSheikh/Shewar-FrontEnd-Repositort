import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {  
  @Input() product !: Product;
  showPopUp!: boolean;

  constructor(private productService: ProductService) {}
  getImageUrl(imageName: string): string {
    return '../../assets/images/' + imageName;
  }
  addToCart(){
    this.productService.addProduct(this.product);
    this.productService.setHomeContainer('cart');
  }
}
