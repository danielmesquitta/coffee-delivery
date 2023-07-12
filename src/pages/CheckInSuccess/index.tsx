import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { Card, Cash, Location, Time } from 'react-ionicons';
import { Icon } from '~/components/Icon';
import { userStore } from '~/store/user';
import { defaultTheme } from '~/styles/themes/default';
import {
  ConfirmedSaleContainer,
  Detail,
  DetailContent,
  Details,
  DetailsContainer,
} from './styles';

const { colors } = defaultTheme;

const CheckInSuccess = observer(() => {
  const { address, paymentMethod } = userStore;

  const ptbrPaymentMethod = useMemo(() => {
    switch (paymentMethod) {
      case 'CASH':
        return 'Dinheiro';
      case 'CREDIT_CARD':
        return 'Cartão de crédito';
      case 'DEBIT_CARD':
        return 'Cartão de débito';
      default:
        return 'Dinheiro';
    }
  }, [paymentMethod]);

  return (
    <ConfirmedSaleContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>

        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <div>
        <DetailsContainer>
          <Details>
            <Detail>
              <Icon icon={Location} backgroundColor={colors['secondary-500']} />

              <DetailContent>
                <p>
                  {'Entrega em '}
                  <strong>{`${address!.street}, ${address!.number}`}</strong>
                </p>
                <p>{`${address!.neighborhood} - ${address!.city}, ${
                  address!.state
                }`}</p>
              </DetailContent>
            </Detail>

            <Detail>
              <Icon icon={Time} backgroundColor={colors['primary-500']} />

              <DetailContent>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </DetailContent>
            </Detail>

            <Detail>
              <Icon
                icon={paymentMethod === 'CASH' ? Cash : Card}
                backgroundColor={colors['primary-700']}
              />

              <DetailContent>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{ptbrPaymentMethod}</strong>
                </p>
              </DetailContent>
            </Detail>
          </Details>
        </DetailsContainer>

        <img
          src="/entregador.svg"
          alt="Ilustração de um homem dirigindo uma moto fazendo entregas"
        />
      </div>
    </ConfirmedSaleContainer>
  );
});

export default CheckInSuccess;
