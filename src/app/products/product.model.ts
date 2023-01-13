/**
 * Enum for the Various Categories
 */
export enum Category {
  veges = 'veges',
  electronics = 'electronics',
  fruits = 'fruits',
}

/**
 * Interface for customer reviews and ratings
 */
export interface customerReview {
  customerName: string;
  review: string;
  date: string;
  customerRating: number;
  place: string;
}

/**
 * Product model interface
 */
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
