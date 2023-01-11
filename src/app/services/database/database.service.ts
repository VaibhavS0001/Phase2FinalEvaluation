import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from 'src/app/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      users: [
        {
          id: 1,
          email: 'vaib@gmail.com',
          password: 'password11',
          name: 'Vaibhav',
          role: 'Admin',
        },
        {
          id: 2,
          email: 'vaib1@gmail.com',
          password: 'password22',
          name: 'John Smith',
          role: 'User',
        },
        {
          id: 3,
          email: 'vaib2@gmail.com',
          password: 'password22',
          name: 'James Cook',
          role: 'User',
        },
      ],
      products: [
        {
          id: 1,
          name: 'Tomato',
          price: '40',
          category: Category.veges,
          rating: 4,
          image: '../../assets/images/tomato.png',
          description: 'This is a tomato',
        },
        {
          id: 2,
          name: 'Corn',
          price: '140',
          category: Category.veges,
          rating: 4.5,
          image: 'assets/images/sweetCorn.jpg',
          description: 'These are delicious corn',
        },
        {
          id: 3,
          name: 'Phone',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/RsmartPhone1.jpg',
          description: 'This is a smart Phone',
        },
      ],
    };
  }
}
