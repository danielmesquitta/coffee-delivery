import type { Address } from '~/contexts/user/types';

export interface AddressFormData {
  address: Address;
}

export interface AddressFormProps {
  hasSubmitButton?: boolean;
}
