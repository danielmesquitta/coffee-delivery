import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { AddressForm } from '~/components/AddressForm';
import { useCartContext } from '~/contexts/cart';
import { useUserContext } from '~/contexts/user';
import { DetailsForm } from './components/DetailsForm';
import { PaymentForm } from './components/PaymentForm';
import { CheckInContainer, CheckInSection } from './styles';

const checkInFormValidationSchema = zod.object({
  address: zod.object({
    zipCode: zod.string(),
    street: zod.string(),
    number: zod.string(),
    complement: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string(),
  }),

  paymentMethod: zod.enum(['CREDIT_CARD', 'DEBIT_CARD', 'CASH']),

  products: zod.array(
    zod.object({ id: zod.number().min(1), amount: zod.number().min(0) }),
  ),
});

export type CheckInFormData = zod.infer<typeof checkInFormValidationSchema>;

export const CheckIn = () => {
  const { cart } = useCartContext();

  const { address, paymentMethod } = useUserContext();

  console.log(address, paymentMethod);

  const checkInForm = useForm<CheckInFormData>({
    resolver: zodResolver(checkInFormValidationSchema),

    defaultValues: {
      address: address ?? undefined,

      paymentMethod: paymentMethod ?? undefined,

      products: cart.map(({ id, amount }) => ({ id, amount })),
    },
  });

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
};
