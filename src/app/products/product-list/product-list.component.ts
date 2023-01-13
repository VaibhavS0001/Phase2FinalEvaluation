import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from 'src/app/state/products/product.state';
import { getProducts } from 'src/app/state/products/products.selectors';
import { IProduct } from '../product.model';
import * as ProductActions from '../../state/products/products.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('enlarge', [
      state(
        'end',
        style({
          'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)',
        })
      ),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isHoveringState: Array<string> = [];
  panelOpenState = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['image', 'name', 'price', 'rating', 'Actions'];
  dataSource!: any;
  navButton: string = 'login';
  category!: string;
  msg!: string;
  role!: any;

  constructor(
    private aRoute: ActivatedRoute,
    private store: Store<ProductState>,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  public allProducts: Observable<IProduct[]> = this.store.select(getProducts);

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
    this.aRoute.paramMap.subscribe((params: any) => {
      this.category = params.params.category;
      this.store.dispatch(ProductActions.loadProducts());
    });

    this.allProducts.subscribe((products) => {
      this.products = products.filter(
        (product) => product.category == this.category
      );
      for (let i = 0; i < this.products.length; i++) {
        this.isHoveringState[i] = 'void';
      }
      // this.products = products;
      this.dataSource = new MatTableDataSource<IProduct>(this.products);
      this.dataSource.paginator = this.paginator;
    });
  }

  OnclickRating(msg: string): void {
    this.msg = msg;
  }

  details(prod: IProduct): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '60%',
      data: { product: prod, type: 'getProducts' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.type === 'saveToCart') {
          this.snackbar.open('Product Added to Cart Successfully', 'close', {
            duration: 2000,
          });
          this.router.navigate(['products/cart'], { state: { data: result.res } });
        }
        if (result.type === 'delete') {
          let productId = result.res.id;
          this.store.dispatch(
            ProductActions.deleteProduct({ productId })
          );
          this.snackbar.open('Product deleted Successfully', 'close', {
            duration: 2000,
          });
        }

        if (result.type === 'update') {
          let product = result.res;
          this.store.dispatch(
            ProductActions.updateProduct({ product })
          );
          this.snackbar.open('Product updated Successfully', 'close', {
            duration: 2000,
          });
        }
      }
    });
  }
  changeHover(index: number): void {
    this.isHoveringState[index] =
      this.isHoveringState[index] === 'void' ? 'end' : 'void';
  }
}
