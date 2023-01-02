import { LocationOutline } from 'react-ionicons';
import { defaultTheme } from '../../styles/themes/default';
import { Icon } from '../Icon';
import { AddressFormContainer, AddressFormGrid } from './styles';

const { colors } = defaultTheme;

export const AddressForm = () => (
  <AddressFormContainer>
    <header>
      <Icon icon={LocationOutline} size={22} color={colors['primary-500']} />

      <div>
        <strong>Endereço de entrega</strong>
        <p>Informe o endereço onde deseja receber o pedido</p>
      </div>
    </header>

    <AddressFormGrid>
      <input type="text" placeholder="CEP" />

      <input type="text" placeholder="Endereço" />

      <input type="text" placeholder="Número" />

      <input type="text" placeholder="Complemento" />

      <input type="text" placeholder="Bairro" />

      <input type="text" placeholder="Cidade" />

      <input type="text" placeholder="Estado" />
    </AddressFormGrid>
  </AddressFormContainer>
);
