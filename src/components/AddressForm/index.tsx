import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { LocationOutline } from 'react-ionicons';
import { Icon } from '~/components/Icon';
import { useUserContext } from '~/contexts/user';
import { defaultTheme } from '~/styles/themes/default';
import {
  AddressFormContainer,
  AddressFormFooter,
  AddressFormGrid,
} from './styles';
import type { AddressFormData, AddressFormProps } from './types';

const { colors } = defaultTheme;

export const AddressForm = ({ hasSubmitButton, ...rest }: AddressFormProps) => {
  const { register, handleSubmit } = useFormContext<AddressFormData>();

  const { setAddress } = useUserContext();

  const handleAddressSubmit = useCallback(
    ({ address }: AddressFormData) => {
      console.log({ address });

      setAddress(address);
    },
    [setAddress],
  );

  return (
    <AddressFormContainer
      {...rest}
      onSubmit={handleSubmit(handleAddressSubmit)}
    >
      <header>
        <Icon icon={LocationOutline} size={22} color={colors['primary-500']} />

        <div>
          <strong>Endereço de entrega</strong>
          <p>Informe o endereço onde deseja receber o pedido</p>
        </div>
      </header>

      <AddressFormGrid>
        <input type="text" placeholder="CEP" {...register('address.zipCode')} />

        <input
          type="text"
          placeholder="Endereço"
          {...register('address.street')}
        />

        <input
          type="number"
          placeholder="Número"
          {...register('address.number')}
        />

        <input
          type="text"
          placeholder="Complemento"
          {...register('address.complement')}
        />

        <input
          type="text"
          placeholder="Bairro"
          {...register('address.neighborhood')}
        />

        <input type="text" placeholder="Cidade" {...register('address.city')} />

        <input
          type="text"
          placeholder="Estado"
          {...register('address.state')}
        />
      </AddressFormGrid>

      {hasSubmitButton && (
        <AddressFormFooter>
          <button type="submit">Salvar endereço</button>
        </AddressFormFooter>
      )}
    </AddressFormContainer>
  );
};
