import { autorun, makeAutoObservable } from 'mobx';

import { Product, SelectedProduct } from './types';

const cartLocalStorageKey = '@coffee-delivery:cart-v1.0';

class CartStore {
  public cart = [] as SelectedProduct[];

  constructor() {
    makeAutoObservable(this);

    this.loadCartFromLocalStorage();
  }

  private loadCartFromLocalStorage = () => {
    const storedStateAsJSON = localStorage.getItem(cartLocalStorageKey);

    if (storedStateAsJSON) {
      this.cart = JSON.parse(storedStateAsJSON) as SelectedProduct[];
    }
  };

  public saveCartToLocalStorage = () => {
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(this.cart));
  };

  public clearCartLocalStorage = () => {
    localStorage.removeItem(cartLocalStorageKey);
  };

  get totalPrice() {
    return this.cart.reduce((acc, { totalPrice }) => acc + totalPrice!, 0);
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
    } else {
      this.cart.push({ ...product, amount: 1, totalPrice: product.price });
    }
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
    }
  };

  removeProduct = (productId: number) => {
    const productIsInCart = this.cart.some(({ id }) => id === productId);

    if (!productIsInCart) {
      // do nothing if product is not in cart
      return;
    }

    // remove product from cart
    this.cart = this.cart.filter(({ id }) => id !== productId);
  };

  emptyCart = () => {
    this.cart = [];
  };
}

const cartStore = new CartStore();

autorun(() => {
  if (cartStore.cart.length) {
    cartStore.saveCartToLocalStorage();
  } else {
    cartStore.clearCartLocalStorage();
  }
});

export { CartStore, cartStore };
