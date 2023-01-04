import type { PaymentMethod } from '~/contexts/user/types';

export interface PaymentFormData {
  paymentMethod: PaymentMethod;
}

export interface PaymentOptionProps {
  isActive: boolean;
}
