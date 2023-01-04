import { AddressForm } from '~/components/AddressForm';
import { AddressContainer } from './styles';

export const Address = () => {
  return (
    <AddressContainer>
      <h2>Atualize seu endereço</h2>

      <AddressForm hasSubmitButton />
    </AddressContainer>
  );
};
