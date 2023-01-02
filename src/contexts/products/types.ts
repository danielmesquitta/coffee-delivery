import { products } from './data';

export type Product = typeof products[0];

export interface ProductsContextProviderProps {
  children: React.ReactNode;
}

export interface SelectedProduct extends Product {
  amount?: number;
  totalPrice?: number;
}

export interface ProductsContextData {
  selectedProducts: Array<SelectedProduct>;
  totalPrice: number;
  addProduct: (id: number) => void;
  subtractProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}
