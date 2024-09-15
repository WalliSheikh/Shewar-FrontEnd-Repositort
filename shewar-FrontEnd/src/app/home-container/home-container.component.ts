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
    showTopProducts: boolean = true;
    showCategories: boolean = true;
    selectedCateogryProducts: Product[] = []
    backUpSelectedCateogryProducts: Product[] = []
    dialogRef: any
    topProducts: Product[] = [
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
                { name: "Beef Tenderloin", price: 20.00, description: "Premium cut of beef tenderloin", imageUrl: "beef-tenderloin.jpg", quantity: 1, totalPrice: 20.00 },
                { name: "Pork Chops", price: 15.00, description: "Juicy pork chops", imageUrl: "pork-chops.jpg", quantity: 1, totalPrice: 15.00 },
                { name: "Chicken Breast", price: 10.00, description: "Boneless chicken breast", imageUrl: "chicken-breast.jpg", quantity: 1, totalPrice: 10.00 },
                { name: "Lamb Leg", price: 25.00, description: "Whole leg of lamb", imageUrl: "lamb-leg.jpg", quantity: 1, totalPrice: 25.00 },
                { name: "Turkey Breast", price: 18.00, description: "Lean turkey breast", imageUrl: "turkey-breast.jpg", quantity: 1, totalPrice: 18.00 },
                { name: "Duck Breast", price: 22.00, description: "Tender duck breast", imageUrl: "duck-breast.jpg", quantity: 1, totalPrice: 22.00 },
                { name: "Beef Mince", price: 12.00, description: "Ground beef for versatile cooking", imageUrl: "beef-mince.jpg", quantity: 1, totalPrice: 12.00 },
                { name: "Beef Brisket", price: 30.00, description: "Rich and flavorful brisket cut", imageUrl: "beef-brisket.jpg", quantity: 1, totalPrice: 30.00 },
                { name: "Beef Ribs", price: 28.00, description: "Succulent beef ribs", imageUrl: "beef-ribs.jpg", quantity: 1, totalPrice: 28.00 },
                { name: "Beef Sirloin", price: 22.00, description: "Tender sirloin steak", imageUrl: "beef-sirloin.jpg", quantity: 1, totalPrice: 22.00 },
                { name: "Beef Chuck Roast", price: 24.00, description: "Perfect for slow cooking", imageUrl: "beef-chuck-roast.jpg", quantity: 1, totalPrice: 24.00 },
                { name: "Beef Short Ribs", price: 26.00, description: "Delicious short ribs", imageUrl: "beef-short-ribs.jpg", quantity: 1, totalPrice: 26.00 },
                { name: "Beef Liver", price: 9.00, description: "Nutrient-rich beef liver", imageUrl: "beef-liver.jpg", quantity: 1, totalPrice: 9.00 },
                { name: "Beef Tongue", price: 15.00, description: "Tender and flavorful tongue", imageUrl: "beef-tongue.jpg", quantity: 1, totalPrice: 15.00 },
                { name: "Beef Heart", price: 12.00, description: "Rich in flavor and nutrients", imageUrl: "beef-heart.jpg", quantity: 1, totalPrice: 12.00 }
            ]
        },
        {
            name: "Mutton",
            imageUrl: "mutton.jpg",
            products: [
                { name: "Mutton Leg", price: 35.00, description: "Whole mutton leg", imageUrl: "mutton-leg.jpg", quantity: 1, totalPrice: 35.00 },
                { name: "Mutton Chops", price: 25.00, description: "Tender mutton chops", imageUrl: "mutton-chops.jpg", quantity: 1, totalPrice: 25.00 },
                { name: "Mutton Shoulder", price: 30.00, description: "Flavorful mutton shoulder", imageUrl: "mutton-shoulder.jpg", quantity: 1, totalPrice: 30.00 },
                { name: "Mutton Ribs", price: 28.00, description: "Juicy mutton ribs", imageUrl: "mutton-ribs.jpg", quantity: 1, totalPrice: 28.00 },
                { name: "Mutton Mince", price: 18.00, description: "Versatile ground mutton", imageUrl: "mutton-mince.jpg", quantity: 1, totalPrice: 18.00 },
                { name: "Mutton Liver", price: 12.00, description: "Rich and nutritious liver", imageUrl: "mutton-liver.jpg", quantity: 1, totalPrice: 12.00 },
                { name: "Mutton Kidney", price: 14.00, description: "Flavorful mutton kidney", imageUrl: "mutton-kidney.jpg", quantity: 1, totalPrice: 14.00 },
                { name: "Mutton Neck", price: 16.00, description: "Perfect for stews", imageUrl: "mutton-neck.jpg", quantity: 1, totalPrice: 16.00 },
                { name: "Mutton Heart", price: 15.00, description: "Rich in flavor and nutrients", imageUrl: "mutton-heart.jpg", quantity: 1, totalPrice: 15.00 },
                { name: "Mutton Tongue", price: 20.00, description: "Tender and flavorful tongue", imageUrl: "mutton-tongue.jpg", quantity: 1, totalPrice: 20.00 },
                { name: "Mutton Steaks", price: 22.00, description: "Delicious mutton steaks", imageUrl: "mutton-steaks.jpg", quantity: 1, totalPrice: 22.00 },
                { name: "Mutton Curry Cut", price: 24.00, description: "Perfect for curry dishes", imageUrl: "mutton-curry-cut.jpg", quantity: 1, totalPrice: 24.00 },
                { name: "Mutton Shanks", price: 26.00, description: "Rich and flavorful shanks", imageUrl: "mutton-shanks.jpg", quantity: 1, totalPrice: 26.00 },
                { name: "Mutton Breast", price: 19.00, description: "Flavorful mutton breast", imageUrl: "mutton-breast.jpg", quantity: 1, totalPrice: 19.00 },
                { name: "Mutton Sausages", price: 21.00, description: "Savory mutton sausages", imageUrl: "mutton-sausages.jpg", quantity: 1, totalPrice: 21.00 }
            ]
        }
    ];


    constructor(private productService: ProductService, private dialog: MatDialog) {
        this.homeContainerSubscription = this.productService.getHomeContainer().subscribe(value => {
            if (value == 'cart') {
                this.openCart()
            } else if (value == 'check-out') {
                this.closePopUp();
                this.showCheckout = true;
                this.orderConfirmation = false;
                this.orderCompleted = false;
                this.showTopProducts = false;
                this.showCategories = false;
            } else if (value == 'confirm-order') {
                this.orderConfirmation = true;
                this.showCheckout = false;
                this.orderCompleted = false;
                this.showTopProducts = false;
                this.showCategories = false;
            } else if (value == 'order-completed') {
                this.orderCompleted = true;
                this.showCheckout = false;
                this.orderConfirmation = false;
                this.showTopProducts = false;
                this.showCategories = false;

            } else if (value == 'my-order') {
                this.openMyOrders()
            } else if (value == 'continue') {
                this.closePopUp();
            } else if (value == 'home') {
                this.showCheckout = false;
                this.orderConfirmation = false;
                this.orderCompleted = false;
                this.showTopProducts = true;
                this.showCategories = true;
                this.closePopUp();
            } else if (value?.category != '' && value?.category) {
                this.showCheckout = false;
                this.orderConfirmation = false;
                this.orderCompleted = false;
                this.showTopProducts = false;
                this.showCategories = false;
                this.closePopUp();
                const category = this.categories.find(cat => cat.name === value.category);
                if (category) {
                    this.selectedCateogryProducts = category.products;
                    this.backUpSelectedCateogryProducts = this.selectedCateogryProducts
                }
            }
        });
    }

    getInputValue(value : string){
        this.selectedCateogryProducts = this.backUpSelectedCateogryProducts.filter(product => product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    }

    ngOnDestroy() {
        this.homeContainerSubscription.unsubscribe();
    }

    openCart() {
        this.dialogRef = this.dialog.open(CartComponent, {
            width: '800px',
            panelClass: 'custom-dialog-container'
        });
    }

    openMyOrders(){
        this.dialogRef = this.dialog.open(MyOrderComponent, {
            width: '800px',
            height: '300px'
        });
    }

    closePopUp() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }


}
