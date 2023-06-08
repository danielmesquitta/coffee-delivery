import { makeAutoObservable } from 'mobx';

import { Product, SelectedProduct } from './types';

class CartStore {
  cart = [] as SelectedProduct[];
  totalPrice = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getProductAmount = (productId: number) =>
    this.cart.find(({ id }) => id === productId)?.amount || 0;

  addProduct = (product: Product) => {
    const productIsInCartIndex = this.cart.findIndex(
      ({ id }) => id === product.id,
    );

    const productIsInCart = productIsInCartIndex !== -1;

    if (productIsInCart) {
      const currProduct = this.cart[productIsInCartIndex];

      // increment amount
      currProduct.amount! += 1;

      // increment product total price in cart
      currProduct.totalPrice! += product.price;

      // increment cart total price
      this.totalPrice += product.price;
    } else {
      this.cart.push({ ...product, amount: 1, totalPrice: product.price });
    }

    this.totalPrice += product.price;
  };

  subtractProduct = (productId: number) => {
    const productIsInCartIndex = this.cart.findIndex(
      ({ id }) => id === productId,
    );

    const productIsInCart = productIsInCartIndex !== -1;

    if (!productIsInCart) {
      // do nothing if product is not in cart
      return;
    }

    const currProduct = this.cart[productIsInCartIndex];

    const amount = Number(currProduct.amount);

    if (amount === 1) {
      // remove product from cart if amount is 1
      this.removeProduct(productId);
    } else {
      // decrement amount
      currProduct.amount! -= 1;

      // decrement product total price in cart
      currProduct.totalPrice! -= currProduct.price;

      // decrement cart total price
      this.totalPrice -= currProduct.price;
    }
  };

  removeProduct = (productId: number) => {
    const productIsInCartIndex = this.cart.findIndex(
      ({ id }) => id === productId,
    );

    const productIsInCart = productIsInCartIndex !== -1;

    if (!productIsInCart) {
      // do nothing if product is not in cart
      return;
    }

    // remove product from cart
    this.cart = this.cart.filter(({ id }) => id !== productId);
  };

  emptyCart = () => {
    this.cart = [];

    this.totalPrice = 0;
  };
}

export const cartStore = new CartStore();
