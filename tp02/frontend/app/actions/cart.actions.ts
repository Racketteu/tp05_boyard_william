import { CoffeeProduct } from "../model/CoffeeProduct";

export class AddToCart {
    static readonly type = '[CoffeeProduct] Add';
  
    constructor(public payload: CoffeeProduct) {}
}

export class DelToCart {
    static readonly type = '[CoffeeProduct] Add';
  
    constructor(public payload: CoffeeProduct) {}
}