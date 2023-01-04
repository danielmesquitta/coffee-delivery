export interface Address {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export type PaymentMethod = 'CREDIT_CARD' | 'DEBIT_CARD' | 'CASH';

export interface UserContextProviderProps {
  children: React.ReactNode;
}

export interface UserContextData {
  address: Address | null;
  paymentMethod: PaymentMethod | null;
  setAddress: (address: Address) => void;
  setPaymentMethod: (paymentMethod: PaymentMethod) => void;
}
