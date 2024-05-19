import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input() category !: Category;
  

  constructor(private productService: ProductService) {}
  getImageUrl(imageName: string): string {
    return '../../assets/images/' + imageName;
  }
  
  getProducts(){
    this.productService.setHomeContainer('products');

  }
}
