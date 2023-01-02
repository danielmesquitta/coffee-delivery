import {
  CardOutline,
  CashOutline,
  PricetagOutline,
  WalletOutline,
} from 'react-ionicons';
import { Icon } from '../../../../components/Icon';
import { defaultTheme } from '../../../../styles/themes/default';
import { PaymentFormContainer, PaymentOption, PaymentOptions } from './styles';

const { colors } = defaultTheme;

export const PaymentForm = () => {
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
        <PaymentOption>
          <Icon icon={CardOutline} color={colors['secondary-500']} />

          <input
            type="radio"
            id="credit"
            name="paymentMethod"
            value="CREDIT_CARD"
          />
          <label htmlFor="credit">Cartão de crédito</label>
        </PaymentOption>

        <PaymentOption>
          <Icon icon={WalletOutline} color={colors['secondary-500']} />

          <input
            type="radio"
            id="debit"
            name="paymentMethod"
            value="DEBIT_CARD"
          />
          <label htmlFor="debit">Cartão de debito</label>
        </PaymentOption>

        <PaymentOption>
          <Icon icon={CashOutline} color={colors['secondary-500']} />

          <input type="radio" id="cash" name="paymentMethod" value="CASH" />
          <label htmlFor="cash">Dinheiro</label>
        </PaymentOption>
      </PaymentOptions>
    </PaymentFormContainer>
  );
};
