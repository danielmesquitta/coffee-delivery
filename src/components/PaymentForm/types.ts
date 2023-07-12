import type { PaymentMethod } from '~/store/user/types';

export interface PaymentFormData {
  paymentMethod: PaymentMethod;
}

export interface PaymentOptionProps {
  isActive: boolean;
}
