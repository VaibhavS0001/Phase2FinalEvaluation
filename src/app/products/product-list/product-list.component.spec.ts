import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from 'src/app/common/shared.module';
import * as reducer from '../../state/products/products.reducers';
import * as state from '../../state/products/product.state';
import { ProductListComponent } from './product-list.component';
import { getProducts } from 'src/app/state/products/products.selectors';
import { Category, IProduct, subCategory } from '../product.model';
import { Observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore<{
    currentProductId: number | null;
    products: IProduct[];
    error: string;
  }>;
  const initialState = { currentProductId: null, products: [], error: '' };
  let mockStore: MockStore<state.State>;
  let mockProductSelector: Observable<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [SharedModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    mockStore = TestBed.get<Store>(Store);
    mockStore.setState({
      products: {
        currentProductId: 80,
        products: [
          {
            id: 80,
            name: 'Apples',
            price: '200',
            category: Category.fruits,
            subCategory: subCategory.applePear,
            rating: 5,
            image: '../assets/images/apple.png',
            customerReviews: [
              {
                customerName: 'Jane',
                review: 'Great Quality',
                customerRating: 4,
                date: '27 Dec 2015',
                place: 'India',
              },
            ],
            views: 500,
          },
        ],
        error: '',
      },
    });
    mockProductSelector = mockStore.select(getProducts);
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the product list', () => {
    component.category = 'fruits';
    component.subCategory = 'applePear';
    mockProductSelector.subscribe((prod) => {
      component.products = prod.filter(
        (product: any) => product.subCategory == component.subCategory
      );
    });
    fixture.detectChanges();
    console.log(component.category);
    console.log(component.subCategory);
    console.log(component.products);
    expect(component.products).toEqual([
      {
        id: 80,
        name: 'Apples',
        price: '200',
        category: Category.fruits,
        subCategory: subCategory.applePear,
        rating: 5,
        image: '../assets/images/apple.png',
        customerReviews: [
          {
            customerName: 'Jane',
            review: 'Great Quality',
            customerRating: 4,
            date: '27 Dec 2015',
            place: 'India',
          },
        ],
        views: 500,
      },
    ]);
  });
});
