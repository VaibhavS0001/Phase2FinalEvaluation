import { TestBed } from '@angular/core/testing';
import {
  Category,
  IProduct,
  subCategory,
} from 'src/app/products/product.model';

import { CartListService } from './cart-list.service';

describe('CartListService', () => {
  let service: CartListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product Object consisting of product and quantity as an array', () => {
    let productData: {
      products: Array<IProduct>;
      quantity: Array<number>;
    } = { products: [], quantity: [] };
    expect(service.getProduct()).toEqual(productData);
  });

  it('should set product Object consisting of product and quantity locally', () => {
    let productData: {
      products: Array<IProduct>;
      quantity: Array<number>;
    } = {
      products: [
        {
          id: 1,
          name: 'Lettuce',
          price: '40',
          category: Category.veges,
          subCategory: subCategory.leafyGreen,
          rating: 4,
          image: '../../assets/images/lettuce.png',
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
      quantity: [1],
    };
    service.setProduct(productData);
    expect(service.productData).toEqual(productData);
  });
});
