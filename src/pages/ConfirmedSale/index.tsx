import { Card, Cash, Location, Time } from 'react-ionicons';
import { Icon } from '~/components/Icon';
import { defaultTheme } from '~/styles/themes/default';
import {
  ConfirmedSaleContainer,
  Detail,
  DetailContent,
  Details,
  DetailsContainer,
} from './styles';

const isCash = true;

const { colors } = defaultTheme;

export const ConfirmedSale = () => {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                icon={isCash ? Cash : Card}
                backgroundColor={colors['primary-700']}
              />

              <DetailContent>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de crédito</strong>
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
};
