import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { AddressForm } from '~/components/AddressForm';
import { userStore } from '~/store/user';
import { AddressContainer } from './styles';

const addressFormValidationSchema = z.object({
  address: z
    .object({
      zipCode: z
        .string()
        .regex(/^\d{5}-\d{3}$/, 'O CEP deve ter o formato 00000-000'),
      street: z.string().min(1, 'A rua é obrigatória'),
      number: z.string().min(1, 'O número é obrigatório'),
      complement: z.string(),
      neighborhood: z.string().min(1, 'O bairro é obrigatório'),
      city: z.string().min(1, 'A cidade é obrigatória'),
      state: z.string().min(1, 'O estado é obrigatório'),
    })
    .required(),
});

type AddressFormData = z.infer<typeof addressFormValidationSchema>;

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
