import { observer } from 'mobx-react';
import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { LocationOutline } from 'react-ionicons';
import { toast } from 'react-toastify';
import { Icon } from '~/components/Icon';
import { brasilApi } from '~/services/brasilApi';
import { userStore } from '~/store/user';
import { defaultTheme } from '~/styles/themes/default';
import {
  AddressFormContainer,
  AddressFormFooter,
  AddressFormGrid,
} from './styles';
import type {
  AddressFormData,
  AddressFormProps,
  CEPApiResponse,
  IBGEApiResponse,
} from './types';

const { colors } = defaultTheme;

export const AddressForm = observer(
  ({ hasSubmitButton, ...rest }: AddressFormProps) => {
    const { setAddress } = userStore;

    const { register, handleSubmit, watch, setValue } =
      useFormContext<AddressFormData>();

    const [hasValidZipCode, setHasValidZipCode] = useState(false);

    const [states, setStates] = useState<string[]>([]);

    const handleAddressSubmit = useCallback(
      ({ address }: AddressFormData) => {
        setAddress(address);

        toast.success('Endereço atualizado com sucesso!');
      },
      [setAddress],
    );

    const zipCode = watch('address.zipCode')?.replace(/\D/g, '');

    useEffect(() => {
      const fetchStates = async () => {
        const { data } = await brasilApi<IBGEApiResponse>('/ibge/uf/v1');

        const formattedStates = data
          .map(({ sigla: acronym }) => acronym)
          .sort();

        setStates(formattedStates);
      };

      fetchStates();
    }, []);

    useEffect(() => {
      const fetchAddress = async () => {
        const { data } = await brasilApi<CEPApiResponse>(`/cep/v2/${zipCode}`);

        const { city, neighborhood, state, street } = data;

        setHasValidZipCode(Boolean(street));

        setValue('address.city', city);
        setValue('address.neighborhood', neighborhood);
        setValue('address.state', state);
        setValue('address.street', street);
      };

      if (zipCode?.length === 8) {
        fetchAddress();
      } else {
        setHasValidZipCode(false);
      }
    }, [register, setValue, zipCode]);

    return (
      <AddressFormContainer
        {...rest}
        onSubmit={handleSubmit(handleAddressSubmit)}
      >
        <header>
          <Icon
            icon={LocationOutline}
            size={22}
            color={colors['primary-500']}
          />

          <div>
            <strong>Endereço de entrega</strong>
            <p>Informe o endereço onde deseja receber o pedido</p>
          </div>
        </header>

        <AddressFormGrid>
          <InputMask
            mask="99999-999"
            type="text"
            placeholder="CEP"
            required
            {...register('address.zipCode')}
          />

          <input
            type="text"
            placeholder="Endereço"
            disabled={!hasValidZipCode}
            title={
              hasValidZipCode
                ? ''
                : 'Informe o CEP para preencher automaticamente'
            }
            required
            {...register('address.street')}
          />

          <input
            type="number"
            pattern="[0-9]+"
            placeholder="Número"
            required
            min={1}
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
            disabled={!hasValidZipCode}
            title={
              hasValidZipCode
                ? ''
                : 'Informe o CEP para preencher automaticamente'
            }
            required
            {...register('address.neighborhood')}
          />

          <input
            type="text"
            placeholder="Cidade"
            disabled={!hasValidZipCode}
            title={
              hasValidZipCode
                ? ''
                : 'Informe o CEP para preencher automaticamente'
            }
            required
            {...register('address.city')}
          />

          <select
            placeholder="Estado"
            disabled={!hasValidZipCode}
            title={
              hasValidZipCode
                ? ''
                : 'Informe o CEP para preencher automaticamente'
            }
            required
            {...register('address.state')}
          >
            {states.map((acronym) => (
              <option key={acronym} value={acronym}>
                {acronym}
              </option>
            ))}
          </select>
        </AddressFormGrid>

        {hasSubmitButton && (
          <AddressFormFooter>
            <button type="submit">Salvar endereço</button>
          </AddressFormFooter>
        )}
      </AddressFormContainer>
    );
  },
);
