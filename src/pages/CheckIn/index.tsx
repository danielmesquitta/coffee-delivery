import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as zod from 'zod';
import { AddressForm } from '~/components/AddressForm';
import { DetailsForm } from '~/components/DetailsForm';
import { PaymentForm } from '~/components/PaymentForm';
import { cartStore } from '~/store/cart';
import { userStore } from '~/store/user';
import { CheckInContainer, CheckInSection } from './styles';

const checkInFormValidationSchema = zod.object({
  address: zod
    .object({
      zipCode: zod
        .string()
        .min(9, 'O CEP deve ter 8 dígitos')
        .regex(/^\d{5}-\d{3}$/, 'O CEP deve ter o formato 00000-000'),
      street: zod.string().min(1, 'A rua é obrigatória'),
      number: zod.string().min(1, 'O número é obrigatório'),
      complement: zod.string(),
      neighborhood: zod.string().min(1, 'O bairro é obrigatório'),
      city: zod.string().min(1, 'A cidade é obrigatória'),
      state: zod.string().min(1, 'O estado é obrigatório'),
    })
    .required(),

  paymentMethod: zod.enum(['CREDIT_CARD', 'DEBIT_CARD', 'CASH']),

  products: zod
    .array(
      zod
        .object({
          id: zod.number().min(1, 'O ID do produto é obrigatório'),

          amount: zod.number().min(1, 'A quantidade é obrigatória'),
        })
        .required(),
    )
    .nonempty('Selecione pelo menos um café'),
});

export type CheckInFormData = zod.infer<typeof checkInFormValidationSchema>;

const CheckIn = observer(() => {
  const { cart } = cartStore;
  const { address, paymentMethod } = userStore;

  const navigate = useNavigate();

  const checkInForm = useForm<CheckInFormData>({
    resolver: zodResolver(checkInFormValidationSchema),

    defaultValues: {
      address: address ?? undefined,

      paymentMethod: paymentMethod ?? 'CASH',

      products: cart.map(({ id, amount }) => ({ id, amount })),
    },
  });

  useEffect(() => {
    if (cart.length === 0) {
      toast.error(
        'Seu carrinho está vazio! Selecione pelo menos um café para finalizar o pedido',
      );

      navigate('/');
    }
  }, [cart.length, navigate]);

  useEffect(() => {
    const { errors } = checkInForm.formState;

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      toast.error(
        'Falha na validação do pedido. Verifique os dados e tente novamente',
      );
    }
  }, [checkInForm.formState]);

  return (
    <CheckInContainer>
      <FormProvider {...checkInForm}>
        <CheckInSection>
          <h2>Complete seu pedido</h2>
          <AddressForm />

          <PaymentForm />
        </CheckInSection>

        <CheckInSection>
          <h2>Cafés selecionados</h2>

          <DetailsForm />
        </CheckInSection>
      </FormProvider>
    </CheckInContainer>
  );
});

export default CheckIn;
