import { Address } from '~/store/user/types';

export interface AddressFormData {
  address: Address;
}

export interface AddressFormProps {
  hasSubmitButton?: boolean;
}

export interface State {
  acronym: string;
}

export type IBGEApiResponse = Array<{
  sigla: string;
}>;

export type CEPApiResponse = {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};
