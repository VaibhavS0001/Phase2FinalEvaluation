import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CartListService } from 'src/app/services/cart/cart-list.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
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
  c: number = 0;
  badge: number = 0;
  check: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartListService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.productData = this.cartService.getProduct();
    this.badge = this.productData.products.length;
  }

  ngOnInit(): void {
    this.check = true;
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
    this.state = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    this.state.subscribe((data: any) => {
      if (data.data) {
        let count = 0;
        if (data.data != undefined && this.productData != undefined) {
          for (let i = 0; i < this.productData.products.length; i++) {
            if (this.productData.products[i].id == data.data.id) {
              this.snackBar.open(
                'this product has already been added to cart',
                'close',
                {
                  duration: 2000,
                  // panelClass: ['blue-snackbar']
                }
              );
              count++;
            }
          }
          if (count == 0) {
            this.snackBar.open(
              'Product is added go to cart to check it out',
              'close',
              {
                duration: 2000,
                // panelClass: ['blue-snackbar']
              }
            );
            this.productData.products.push(data.data);
            this.productData.quantity.push(1);
            this.badge = this.productData.products.length;
          }

          if (this.c == 1) {
            this.c = 0;
            this.productData.products.shift();
            this.badge = this.productData.products.length;
          }

          this.productData.products.forEach((product) => {
            this.total += parseInt(product.price);
          });
        } else {
          this.c = this.c + 1;
          this.productData = { ...data.data, quantity: 1 };
        }
      }
    });
    this.cartService.setProduct(this.productData);
    // this.productData.products.forEach((product) => {
    //   sum += parseInt(product.price);
    // });

    // this.total = sum;
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
        this.badge = this.productData.products.length;
      }
    }

    this.productData.products.forEach((product) => {
      sum += parseInt(product.price);
    });

    this.total = sum;
  }

  checkout() {
    this.check = false;
    this.router.navigate(['products/cart/checkout', this.total]);
  }
}
