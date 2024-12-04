export interface Rating {
  rate: number;
  count: number;
}

// Product type
export interface Product {
  date: string | number | Date;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
