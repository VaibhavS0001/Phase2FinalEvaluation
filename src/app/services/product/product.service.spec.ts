import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import {
  Category,
  IProduct,
  subCategory,
} from 'src/app/products/product.model';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let url = 'api/products/';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p: IProduct[] = [
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
      ];
      service.getProducts().subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne('api/products/');
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should create Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p = {
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
      };
      service.createProduct(p).subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne('api/products/');
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should update Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p = {
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
      };
      service.updateProduct(p).subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne(`${url}/${p.id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should delete Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let id = 1;
      service.deleteProduct(id).subscribe((products: any) => {
        expect(1).toEqual(products);
      });
      const mockRequest = httpMock.expectOne(`${url}/${id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(id);
      httpMock.verify();
    }
  ));
});
