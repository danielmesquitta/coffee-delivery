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
