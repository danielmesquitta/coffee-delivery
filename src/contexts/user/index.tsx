import { createContext, useCallback, useContext, useState } from 'react';
import type {
  Address,
  PaymentMethod,
  UserContextData,
  UserContextProviderProps,
} from './types';

const UserContext = createContext({} as UserContextData);

const localStorageKeys = {
  address: '@coffee-delivery:address-v1.0',

  paymentMethod: '@coffee-delivery:payment-method-v1.0',
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [address, setAddress] = useState<Address | null>(() => {
    const storedStateAsJSON = localStorage.getItem(localStorageKeys.address);

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON) as Address;
    }

    return null;
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    () => {
      const storedStateAsJSON = localStorage.getItem(
        localStorageKeys.paymentMethod,
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON) as PaymentMethod;
      }

      return null;
    },
  );

  const customSetAddress = useCallback((address: Address) => {
    localStorage.setItem(localStorageKeys.address, JSON.stringify(address));

    setAddress(address);
  }, []);

  const customSetPaymentMethod = useCallback((paymentMethod: PaymentMethod) => {
    localStorage.setItem(
      localStorageKeys.paymentMethod,
      JSON.stringify(paymentMethod),
    );

    setPaymentMethod(paymentMethod);
  }, []);

  return (
    <UserContext.Provider
      value={{
        address,
        paymentMethod,
        setAddress: customSetAddress,
        setPaymentMethod: customSetPaymentMethod,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};
