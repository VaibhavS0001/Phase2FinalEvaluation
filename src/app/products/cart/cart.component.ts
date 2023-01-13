import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CartListService } from 'src/app/services/cart/cart-list.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  title: string = 'Cart List';
  state!: any;
  productData: {
    products: Array<IProduct>;
    quantity: Array<number>;
  };
  total: number = 0;
  navButton: string = 'login';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartListService
  ) {
    this.productData = this.cartService.getProduct();
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
    let sum = 0;
    this.state = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    this.state.subscribe((data: any) => {
      if (data.data) {
        this.productData.products.push(data.data);
        this.productData.quantity.push(1);
      }
    });
    this.productData.products.forEach((product) => {
      sum += parseInt(product.price);
    });

    this.total = sum;
  }

  add(id: number) {
    let sum = 0;
    for (let i = 0; i < this.productData.products.length; i++) {
      if (this.productData.products[i].id == id) {
        let ac =
          parseInt(this.productData.products[i].price) /
          this.productData.quantity[i];
        this.productData.quantity[i] += 1;
        ac *= this.productData.quantity[i];
        this.productData.products[i].price = ac.toString();
      }
      sum += parseInt(this.productData.products[i].price);
    }

    this.total = sum;
  }

  remove(id: number) {
    let sum = 0;
    for (let i = 0; i < this.productData.products.length; i++) {
      if (
        this.productData.products[i].id == id &&
        this.productData.quantity[i] > 1
      ) {
        let ac =
          parseInt(this.productData.products[i].price) /
          this.productData.quantity[i];
        this.productData.quantity[i] -= 1;
        ac *= this.productData.quantity[i];
        this.productData.products[i].price = ac.toString();
      } else if (
        this.productData.products[i].id == id &&
        this.productData.quantity[i] == 1
      ) {
        this.productData.products.splice(i, 1);
      }
    }

    this.productData.products.forEach((product) => {
      sum += parseInt(product.price);
    });

    this.total = sum;
  }
}
