import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../../models/order.model';

@Injectable()
export class ProductService {
    private products: any[] = JSON.parse(localStorage.getItem('products') || '[]');
    homeContainerSubject = new BehaviorSubject<string>('');
    orders: Order[] = [];
    constructor() { }

    addProduct(product: any): void {
        if (this.products.length > 0) {
            if (!this.products.some(existingProduct => existingProduct.name === product.name)) {
                product.quantity = 1
                product.totalPrice = product.price 
                this.products.push(product);
            }
        } else {
            product.quantity = 1
            product.totalPrice = product.price 
            this.products.push(product);
        }
    }

    setProducts(products: any[]): void {
        this.products = products;
    }

    getAllProducts(): any[] {
        return this.products;
    }

    setHomeContainer(value: any) {
        this.homeContainerSubject.next(value);
    }
    getHomeContainer(): Observable<any> {
        return this.homeContainerSubject.asObservable();
    }
    getCheckOutPayment() {
        return this.products.reduce((acc, product) => acc + product.totalPrice, 0);
    }

    addOrder(order: any) {
        this.orders.push(order);
        this.products = [];
    }

    getOrderCount() {
        return this.orders.length;
    }

    getAllOrders() {
        return this.orders;
    }
}
