/**
 * Enum for the Various Categories
 */
export enum Category {
  veges = 'veges',
  electronics = 'electronics',
  fruits = 'fruits',
}
export enum subCategory {
  cruciferous = 'cruciferous',
  leafyGreen = 'leafyGreen',
  allium = 'allium',
  ediblePlantStem = 'ediblePlantStem',
  root = 'root',
  marrow = 'marrow',
  smartPhone = 'smartPhone',
  smartWatch = 'smartWatch',
  camera = 'camera',
  houseAppliances = 'houseAppliances',
  applePear = 'applePear',
  citrus = 'citrus',
  stoneFruit = 'stoneFruit',
  tropicalExotic = 'tropicalExotic',
  berries = 'berries',
  melons = 'melons',
  tomatoesAvacados = 'tomatoesAvacados',
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
  subCategory: subCategory;
  rating: number;
  image: string;
  customerReviews: Array<customerReview>;
  views: number;
}
