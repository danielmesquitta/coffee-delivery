import { autorun, makeAutoObservable } from 'mobx';
import { Address, PaymentMethod } from './types';

const localStorageKeys = {
  address: '@coffee-delivery:address-v1.0',

  paymentMethod: '@coffee-delivery:payment-method-v1.0',
};

class UserStore {
  address: Address | null = null;

  paymentMethod: PaymentMethod | null = null;

  constructor() {
    makeAutoObservable(this);

    this.loadAddressFromLocalStorage();

    this.loadPaymentMethodFromLocalStorage();
  }

  private loadAddressFromLocalStorage = () => {
    const storedStateAsJSON = localStorage.getItem(localStorageKeys.address);

    if (storedStateAsJSON) {
      this.address = JSON.parse(storedStateAsJSON) as Address;
    }
  };

  private loadPaymentMethodFromLocalStorage = () => {
    const storedStateAsJSON = localStorage.getItem(
      localStorageKeys.paymentMethod,
    );

    if (storedStateAsJSON) {
      this.paymentMethod = JSON.parse(storedStateAsJSON) as PaymentMethod;
    }
  };

  public saveAddressToLocalStorage = () => {
    localStorage.setItem(
      localStorageKeys.address,
      JSON.stringify(userStore.address),
    );
  };

  public clearAddressLocalStorage = () => {
    localStorage.removeItem(localStorageKeys.address);
  };

  public savePaymentMethodToLocalStorage = () => {
    localStorage.setItem(
      localStorageKeys.paymentMethod,
      JSON.stringify(userStore.paymentMethod),
    );
  };

  public clearPaymentMethodLocalStorage = () => {
    localStorage.removeItem(localStorageKeys.paymentMethod);
  };

  public setAddress = (address: Address) => {
    this.address = address;
  };

  public setPaymentMethod = (paymentMethod: PaymentMethod) => {
    this.paymentMethod = paymentMethod;
  };
}

const userStore = new UserStore();

autorun(() => {
  userStore.address
    ? userStore.saveAddressToLocalStorage()
    : userStore.clearAddressLocalStorage();
});

autorun(() => {
  userStore.paymentMethod
    ? userStore.savePaymentMethodToLocalStorage()
    : userStore.clearPaymentMethodLocalStorage();
});

export { UserStore, userStore };
