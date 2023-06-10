import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as zod from 'zod';
import { AddressForm } from '~/components/AddressForm';
import { AddressFormData } from '~/components/AddressForm/types';
import { userStore } from '~/store/user';
import { AddressContainer } from './styles';

const addressFormValidationSchema = zod.object({
  address: zod
    .object({
      zipCode: zod
        .string()
        .regex(/^\d{5}-\d{3}$/, 'O CEP deve ter o formato 00000-000'),
      street: zod.string().min(1, 'A rua é obrigatória'),
      number: zod.string().min(1, 'O número é obrigatório'),
      complement: zod.string(),
      neighborhood: zod.string().min(1, 'O bairro é obrigatório'),
      city: zod.string().min(1, 'A cidade é obrigatória'),
      state: zod.string().min(1, 'O estado é obrigatório'),
    })
    .required(),
});

const Address = observer(() => {
  const { address } = userStore;

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),

    defaultValues: {
      address: address ?? undefined,
    },
  });

  useEffect(() => {
    const { errors } = addressForm.formState;

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      toast.error(
        'Falha na validação do endereço. Verifique os dados e tente novamente',
      );
    }
  }, [addressForm.formState]);

  return (
    <AddressContainer>
      <h2>Atualize seu endereço</h2>

      <FormProvider {...addressForm}>
        <AddressForm hasSubmitButton />
      </FormProvider>
    </AddressContainer>
  );
});

export default Address;
