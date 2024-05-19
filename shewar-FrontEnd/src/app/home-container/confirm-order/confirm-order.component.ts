import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent {
  error: boolean = false;
  errorValue!: string;
  constructor(private productService: ProductService) { }
  submitForm(name: string, address: string, phone: string, city: string) {
    if (!name || !address || !phone || !city) {
      this.errorValue = `${!name ? 'Name' : ''}${!name && !address ? ', ' : ''}${!address ? 'Address' : ''}${(!name || !address) && !phone ? ', ' : ''}${!phone ? 'Phone' : ''}${(!name || !address || !phone) && !city ? ', ' : ''}${!city ? 'City' : ''}`;
      setTimeout(() => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 1000);
      }, 0);

    } else {
      console.log({ Name: name, Address: address, Phone: phone, City: city });
      this.productService.setHomeContainer('order-completed');
    }
  }
  goBack() {
    this.productService.setHomeContainer('check-out');
  }
}
