import { TrashOutline } from 'react-ionicons';
import { AmountController } from '../../../../components/AmountController';
import { Icon } from '../../../../components/Icon';
import { defaultTheme } from '../../../../styles/themes/default';
import { coffees } from '../../../Home/components/CoffeeList/data';
import {
  Controllers,
  Detail,
  Details,
  DetailsFooter,
  DetailsFormContainer,
} from './styles';

const { colors } = defaultTheme;

const selectedCoffees = coffees.slice(0, 3);

export const DetailsForm = () => (
  <DetailsFormContainer>
    <Details>
      {selectedCoffees.map(({ id, imageSrc, title, price }) => (
        <Detail key={id}>
          <img src={imageSrc} alt={`Xícara de ${title}`} />

          <div>
            <h3>
              <span>{title}</span>

              <strong>R$ {price}</strong>
            </h3>

            <Controllers>
              <AmountController />

              <button>
                <Icon icon={TrashOutline} color={colors['secondary-500']} />
                Remover
              </button>
            </Controllers>
          </div>
        </Detail>
      ))}
    </Details>

    <DetailsFooter>
      <p>
        <span>Total de itens</span> <span>R$ 29,70</span>
      </p>

      <p>
        <span>Entrega</span> <span>R$ 3,50</span>
      </p>

      <p>
        <strong>Total</strong> <strong>R$ 33,20</strong>
      </p>

      <button>Confirmar pedido</button>
    </DetailsFooter>
  </DetailsFormContainer>
);
