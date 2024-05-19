export class Product{
    name!:string;
    price!:number;
    description!:string;
    imageUrl!:any;
    quantity:number = 1;
    totalPrice:number = this.price;
}

