import { AddressForm } from '../../components/AddressForm';
import { DetailsForm } from './components/DetailsForm';
import { PaymentForm } from './components/PaymentForm';
import { CheckInContainer, CheckInSection } from './styles';

export const CheckIn = () => {
  return (
    <CheckInContainer>
      <CheckInSection>
        <h2>Complete seu pedido</h2>
        <AddressForm />

        <PaymentForm />
      </CheckInSection>

      <CheckInSection>
        <h2>Cafés selecionados</h2>

        <DetailsForm />
      </CheckInSection>
    </CheckInContainer>
  );
};
