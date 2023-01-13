import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from 'src/app/state/products/product.state';
import { getProducts } from 'src/app/state/products/products.selectors';
import { IProduct } from '../product.model';
import * as ProductActions from '../../state/products/products.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

  /**
   * Animations for enlarging the element on hover
   */
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
  /**
   * Variable Declarations
   */
  displayedColumns: string[] = ['image', 'name', 'price', 'rating', 'Actions'];
  isHoveringState: Array<string> = [];
  navButton: string = 'login';
  products: IProduct[] = [];
  panelOpenState = false;
  category!: string;
  dataSource!: any;
  msg!: string;
  role!: any;

  /**
   * constructor
   * @param store for managing the state of products
   * @param aRoute for getting the data from routes
   * @param snackbar for showing the alert messages
   * @param dialog for opening product Details
   * @param router for navigating to different components
   */
  constructor(
    private store: Store<ProductState>,
    private aRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) {}

  /**
   * for getting Products data
   */
  public allProducts: Observable<IProduct[]> = this.store.select(getProducts);

  /**
   * On Initialization it will check for user authentication
   * if user is authenticated then change navButton to Logout
   * otherwise Login.
   * then fetchs the category from routes and loads the products list
   * and setting data in the datasoure for table view
   */
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
    });
  }

  /**
   * details of the product
   * @param prod passing the particular product to the dialog for details
   */
  details(prod: IProduct): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '60%',
      data: { product: prod, type: 'getProducts' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        /**
         * Save the product to the cart
         */
        if (result.type === 'saveToCart') {
          this.snackbar.open('Product Added to Cart Successfully', 'close', {
            duration: 2000,
          });
          this.router.navigate(['products/cart'], {
            state: { data: result.res },
          });
        }

        /**
         * Delete the product
         */
        if (result.type === 'delete') {
          let productId = result.res.id;
          this.store.dispatch(ProductActions.deleteProduct({ productId }));
          this.snackbar.open('Product deleted Successfully', 'close', {
            duration: 2000,
          });
        }

        /**
         * Update a product
         */
        if (result.type === 'update') {
          let product = result.res;
          this.store.dispatch(ProductActions.updateProduct({ product }));
          this.snackbar.open('Product updated Successfully', 'close', {
            duration: 2000,
          });
        }
      }
    });
  }

  /**
   * change the status of a mouse hover over a product
   * @param index index of the product for animation change
   */
  changeHover(index: number): void {
    this.isHoveringState[index] =
      this.isHoveringState[index] === 'void' ? 'end' : 'void';
  }
}
