import { Injectable } from '@angular/core';
import { Category, IProduct } from 'src/app/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

  productData: {
    products: Array<IProduct>;
    quantity: Array<number>;
  }
  constructor() {
    this.productData = { products: [], quantity: []}
   }

  getProduct(){
    return this.productData
  }

  setProduct(product: any){
    this.productData = product;
  }
}
