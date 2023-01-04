import { useFormContext } from 'react-hook-form';
import {
  CardOutline,
  CashOutline,
  PricetagOutline,
  WalletOutline,
} from 'react-ionicons';
import { Icon } from '~/components/Icon';
import { defaultTheme } from '~/styles/themes/default';
import { PaymentFormContainer, PaymentOption, PaymentOptions } from './styles';
import type { PaymentFormData } from './types';

const { colors } = defaultTheme;

export const PaymentForm = () => {
  const { register, watch } = useFormContext<PaymentFormData>();

  const paymentMethod = watch('paymentMethod');

  return (
    <PaymentFormContainer>
      <header>
        <Icon
          icon={PricetagOutline}
          size={22}
          color={colors['secondary-500']}
        />

        <div>
          <strong>Pagamento</strong>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>

      <PaymentOptions>
        <PaymentOption
          htmlFor="credit"
          isActive={paymentMethod === 'CREDIT_CARD'}
        >
          <Icon icon={CardOutline} color={colors['secondary-500']} />

          <input
            {...register('paymentMethod')}
            id="credit"
            type="radio"
            value="CREDIT_CARD"
          />

          <span>Cartão de crédito</span>
        </PaymentOption>

        <PaymentOption
          htmlFor="debit"
          isActive={paymentMethod === 'DEBIT_CARD'}
        >
          <Icon icon={WalletOutline} color={colors['secondary-500']} />

          <input
            {...register('paymentMethod')}
            id="debit"
            type="radio"
            value="DEBIT_CARD"
          />

          <span>Cartão de debito</span>
        </PaymentOption>

        <PaymentOption htmlFor="cash" isActive={paymentMethod === 'CASH'}>
          <Icon icon={CashOutline} color={colors['secondary-500']} />
          <input
            {...register('paymentMethod')}
            id="cash"
            type="radio"
            value="CASH"
          />

          <span>Dinheiro</span>
        </PaymentOption>
      </PaymentOptions>
    </PaymentFormContainer>
  );
};
