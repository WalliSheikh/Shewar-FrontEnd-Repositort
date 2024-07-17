import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Category } from '../../models/category.model';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { MyOrderComponent } from './my-order/my-order.component';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrl: './home-container.component.css'
})
export class HomeContainerComponent {
    homeContainerSubscription: Subscription;
    showCheckout: boolean = false;
    showMyOrders: boolean = false;
    orderConfirmation: boolean = false;
    orderCompleted: boolean = false;
    dialogRef: any
    products: Product[] = [
        {
            name: "Beef Tenderloin",
            price: 20.00,
            description: "Premium cut of beef tenderloin",
            imageUrl: "chicken.jpg",
            quantity: 1,
            totalPrice: 20.00
        },
        {
            name: "Pork Chops",
            price: 15.00,
            description: "Juicy pork chops",
            imageUrl: "Beef Mince.jpg",
            quantity: 1,
            totalPrice: 15.00
        },
        {
            name: "Chicken Breast",
            price: 10.00,
            description: "Boneless chicken breast",
            imageUrl: "Beef paya (1).jpg",
            quantity: 1,
            totalPrice: 10.00
        },
        {
            name: "Lamb Leg",
            price: 25.00,
            description: "Whole leg of lamb",
            imageUrl: "Beef Shoulder (1).webp",
            quantity: 1,
            totalPrice: 25.00
        },
        {
            name: "Turkey Breast",
            price: 18.00,
            description: "Lean turkey breast",
            imageUrl: "boneless beef (2).jpg",
            quantity: 1,
            totalPrice: 18.00
        },
        {
            name: "Duck Breast",
            price: 22.00,
            description: "Tender duck breast",
            imageUrl: "fish.jpg",
            quantity: 1,
            totalPrice: 22.00
        }
    ];
    // Start of Selection
    categories: Category[] = [
        {
            name: "Beef",
            imageUrl: "beef.jpg",
            products: [
                {
                    name: "Beef Tenderloin",
                    price: 20.00,
                    description: "Premium cut of beef tenderloin",
                    imageUrl: "chicken.jpg",
                    quantity: 1,
                    totalPrice: 20.00
                },
                {
                    name: "Pork Chops",
                    price: 15.00,
                    description: "Juicy pork chops",
                    imageUrl: "Beef Mince.jpg",
                    quantity: 1,
                    totalPrice: 15.00
                },
                {
                    name: "Chicken Breast",
                    price: 10.00,
                    description: "Boneless chicken breast",
                    imageUrl: "Beef paya (1).jpg",
                    quantity: 1,
                    totalPrice: 10.00
                },
                {
                    name: "Lamb Leg",
                    price: 25.00,
                    description: "Whole leg of lamb",
                    imageUrl: "Beef Shoulder (1).webp",
                    quantity: 1,
                    totalPrice: 25.00
                },
                {
                    name: "Turkey Breast",
                    price: 18.00,
                    description: "Lean turkey breast",
                    imageUrl: "boneless beef (2).jpg",
                    quantity: 1,
                    totalPrice: 18.00
                },
                {
                    name: "Duck Breast",
                    price: 22.00,
                    description: "Tender duck breast",
                    imageUrl: "fish.jpg",
                    quantity: 1,
                    totalPrice: 22.00
                }
            ]
        },
        {
            name: "Mutton",
            imageUrl: "mutton.jpg",
            products: []
        }
    ];

    constructor(private productService: ProductService, private dialog: MatDialog) {
        this.homeContainerSubscription = this.productService.getHomeContainer().subscribe(value => {
            if (value == 'cart') {
                this.openPopUp(CartComponent);
            } else if (value == 'check-out') {
                this.showCheckout = true;
                this.orderConfirmation = false;
                this.orderCompleted = false;
                this.closePopUp();
            } else if (value == 'confirm-order') {
                this.orderConfirmation = true;
                this.showCheckout = false;
                this.orderCompleted = false;
            } else if (value == 'order-completed') {
                this.orderCompleted = true;
                this.showCheckout = false;
                this.orderConfirmation = false;

            } else if (value == 'my-order') {
                this.openPopUp(MyOrderComponent);
            }
            else {
                this.showCheckout = false;
                this.orderConfirmation = false;
                this.orderCompleted = false;
                this.closePopUp();
            }
        });
    }

    ngOnDestroy() {
        this.homeContainerSubscription.unsubscribe();
    }

    openPopUp(component: any) {
        this.dialogRef = this.dialog.open(component, {
            width: '800px', // Adjust width as needed
            height: '600px' // Adjust height as needed
        });
    }

    closePopUp() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }


}
