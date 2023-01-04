import { createContext, useCallback, useContext, useReducer } from 'react';
import { cartReducer, localStorageCartKey } from '~/reducers/cart';
import {
  addProductAction,
  emptyCartAction,
  removeProductAction,
  subtractProductAction
} from '~/reducers/cart/actions';
import type { CartContextData, CartContextProviderProps } from './types';

const CartContext = createContext({} as CartContextData);

const initialCartState = {
  cart: [],
  totalPrice: 0,
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    () => {
      const storedStateAsJSON = localStorage.getItem(localStorageCartKey);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialCartState;
    },
  );

  const addProduct = useCallback((productId: number) => {
    dispatch(addProductAction(productId));
  }, []);

  const subtractProduct = useCallback((productId: number) => {
    dispatch(subtractProductAction(productId));
  }, []);

  const removeProduct = useCallback((productId: number) => {
    dispatch(removeProductAction(productId));
  }, []);

  const emptyCart = useCallback(() => {
    dispatch(emptyCartAction());
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        totalPrice: cartState.totalPrice,
        addProduct,
        subtractProduct,
        removeProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }

  return context;
};
