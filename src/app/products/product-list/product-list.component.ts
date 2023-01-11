import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from 'src/app/state/products/product.state';
import { getProducts } from 'src/app/state/products/products.selectors';
import { IProduct } from '../product.model';
import * as ProductActions from '../../state/products/products.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['image', 'name', 'price', 'rating'];
  dataSource!: any;

  constructor(
    private aRoute: ActivatedRoute,
    private store: Store<ProductState>
  ) {}

  public allProducts: Observable<IProduct[]> = this.store.select(getProducts);

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe((params: any) => {
      console.log(params.params.category);
    });
    this.store.dispatch(ProductActions.loadProducts());
    this.allProducts.subscribe((products) => {
      this.products = products;
      this.dataSource = new MatTableDataSource<IProduct>(this.products);
      this.dataSource.paginator = this.paginator;
    });
  }
}
