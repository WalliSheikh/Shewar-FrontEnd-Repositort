import { Product } from "./product.model";

export interface Order {
    products : Product[];
    time : string;
    expanded : boolean;
}
