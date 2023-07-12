import { ActionTypes } from './actions';
import { products } from './data';
import type { CartAction, CartState } from './types';

export const localStorageCartKey = '@coffee-delivery:cart-state-v1.0';

const setCartInLocalStorage = (newCartState: CartState) => {
  localStorage.setItem(localStorageCartKey, JSON.stringify(newCartState));
};

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const cartDraft = [...state.cart];

      const productIndex = cartDraft.findIndex(
        (product) => product.id === action.payload!.productId,
      );

      const productNotFoundInCart = productIndex < 0;

      if (productNotFoundInCart) {
        const product = products.find(
          (product) => product.id === action.payload!.productId,
        );

        const productNotFoundInCart = !product;

        if (productNotFoundInCart) {
          throw new Error('Invalid product id');
        }

        cartDraft.push({ ...product!, amount: 1, totalPrice: product.price });

        const newCartState: CartState = {
          cart: cartDraft,
          totalPrice: state.totalPrice + product.price,
        };

        setCartInLocalStorage(newCartState);

        return newCartState;
      }

      const product = cartDraft[productIndex];

      const newAmount = Number(product.amount) + 1;

      cartDraft[productIndex] = {
        ...product,
        amount: newAmount,
        totalPrice: product.price * newAmount,
      };

      const newCartState: CartState = {
        cart: cartDraft,
        totalPrice: state.totalPrice + product.price,
      };

      setCartInLocalStorage(newCartState);

      return newCartState;
    }

    case ActionTypes.SUBTRACT_PRODUCT: {
      const cartDraft = [...state.cart];

      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload!.productId,
      );

      const productNotFoundInCart = productIndex < 0;

      if (productNotFoundInCart) {
        return state;
      }

      const product = cartDraft[productIndex];

      const amount = Number(product.amount);

      if (amount === 1) {
        cartDraft.splice(productIndex, 1);

        const newCartState: CartState = {
          cart: cartDraft,
          totalPrice: state.totalPrice - product.price,
        };

        setCartInLocalStorage(newCartState);

        return newCartState;
      }

      const newAmount = amount - 1;

      cartDraft[productIndex] = {
        ...product,
        amount: newAmount,
        totalPrice: product.price * newAmount,
      };

      const newCartState: CartState = {
        cart: cartDraft,
        totalPrice: state.totalPrice - product.price,
      };

      setCartInLocalStorage(newCartState);

      return newCartState;
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const cartDraft = [...state.cart];

      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload!.productId,
      );

      const productNotFoundInCart = productIndex < 0;

      if (productNotFoundInCart) {
        return state;
      }

      cartDraft.splice(productIndex, 1);

      const product = state.cart[productIndex];

      const newCartState: CartState = {
        cart: cartDraft,
        totalPrice: state.totalPrice - (product.totalPrice ?? 0),
      };

      setCartInLocalStorage(newCartState);

      return newCartState;
    }

    case ActionTypes.EMPTY_CART: {
      const newCartState: CartState = {
        cart: [],
        totalPrice: 0,
      };

      setCartInLocalStorage(newCartState);

      return newCartState;
    }

    default: {
      return state;
    }
  }
};
