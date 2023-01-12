export enum Category {
  veges = 'veges',
  electronics = 'electronics',
  fruits = 'fruits',
}

export interface customerReview {
  customerName: string;
  review: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: string;
  category: Category;
  rating: number;
  image: string;
  customerReviews: Array<customerReview>;
  views: number;
}
