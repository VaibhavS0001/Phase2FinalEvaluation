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
          name: 'Lettuce',
          price: '40',
          category: Category.veges,
          rating: 4,
          image: '../../assets/images/lettuce.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 2,
          name: 'Spinach',
          price: '140',
          category: Category.veges,
          rating: 4.5,
          image: 'assets/images/spinach.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 3,
          name: 'Silverbeet',
          price: '30',
          category: Category.veges,
          rating: 4,
          image: '../../assets/images/silverbeet.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 4,
          name: 'Cabbage',
          price: '45',
          category: Category.veges,
          rating: 4.5,
          image: 'assets/images/cabbage.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 5,
          name: 'Cauliflower',
          price: '60',
          category: Category.veges,
          rating: 4,
          image: '../../assets/images/cauliflower.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 6,
          name: 'Brussels Sprouts',
          price: '140',
          category: Category.veges,
          rating: 4.5,
          image: 'assets/images/brussels.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 7,
          name: 'Broccoli',
          price: '50',
          category: Category.veges,
          rating: 4,
          image: '../../assets/images/broccoli.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
            {
              customerName: 'James',
              review: 'Quality not so great',
              customerRating: 2.5,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 8,
          name: 'Pumpkin',
          price: '10',
          category: Category.veges,
          rating: 4.5,
          image: 'assets/images/pumpkin.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 60,
          name: 'Galaxy Z Fold 4',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/galaxyzfold4.webp',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 61,
          name: 'Galaxy M53',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/gM53.avif',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 62,
          name: 'Galaxy Tab S8',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/Gtabs8.webp',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 63,
          name: 'Galaxy z Flip 5',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/gzflip4.webp',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 64,
          name: 'Apple iPhone 14 Pro Max',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/iphone14promax.jpg',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 65,
          name: 'Samsnug S22',
          price: '40000',
          category: Category.electronics,
          rating: 5,
          image: '../assets/images/samsungs22.webp',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 80,
          name: 'Apples',
          price: '200',
          category: Category.fruits,
          rating: 5,
          image: '../assets/images/apple.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 81,
          name: 'Pears',
          price: '100',
          category: Category.fruits,
          rating: 4,
          image: '../assets/images/pear.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 82,
          name: 'Oranges',
          price: '60',
          category: Category.fruits,
          rating: 3.5,
          image: '../assets/images/orange.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 83,
          name: 'Grapefruits',
          price: '90',
          category: Category.fruits,
          rating: 3,
          image: '../assets/images/grapefruit.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 84,
          name: 'Apricots',
          price: '120',
          category: Category.fruits,
          rating: 2.5,
          image: '../assets/images/apricot.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
        {
          id: 85,
          name: 'Strawberries',
          price: '420',
          category: Category.fruits,
          rating: 1,
          image: '../assets/images/strawberry.png',
          customerReviews: [
            {
              customerName: 'Jane',
              review: 'Great Quality',
              customerRating: 4,
              date: '27 Dec 2015',
              place: 'India'
            },
          ],
          views: 500,
        },
      ],
    };
  }
}
