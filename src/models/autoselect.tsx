export interface Rating {
  rate: number;
  count: number;
}

// Product type
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
