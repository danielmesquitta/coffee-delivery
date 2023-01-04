import { ActionTypes } from './actions';
import { products } from './data';

export type Product = typeof products[0];

export interface SelectedProduct extends Product {
  amount?: number;
  totalPrice?: number;
}

export interface CartState {
  cart: SelectedProduct[];
  totalPrice: number;
}

export interface CartAction {
  type: ActionTypes;
  payload?: Record<string, any>;
}
