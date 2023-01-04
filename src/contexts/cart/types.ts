import { SelectedProduct } from '~/reducers/cart/types';

export interface CartContextProviderProps {
  children: React.ReactNode;
}

export interface CartContextData {
  cart: Array<SelectedProduct>;
  totalPrice: number;
  addProduct: (id: number) => void;
  subtractProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  emptyCart: () => void;
}
