export enum Category{
    veges = 'veges',
    electronics = 'electronics',
    fruits = 'fruits',
}

export interface IProduct{
    id: number;
    name: string;
    price: string;
    category: Category
    rating: number;
    image: string;
    description: string;
}