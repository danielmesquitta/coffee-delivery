import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { TrashOutline } from 'react-ionicons';
import { AmountController } from '~/components/AmountController';
import { Icon } from '~/components/Icon';
import { formatNumberToCurrency } from '~/helpers/formatNumberToCurrency';
import { cartStore } from '~/store/cart';
import { defaultTheme } from '~/styles/themes/default';
import { Controllers, DetailContainer } from './styles';
import { DetailCardProps } from './types';

const { colors } = defaultTheme;

export const DetailCard = observer(
  ({ product, index, ...rest }: DetailCardProps) => {
    const { id, imageSrc, title, price } = product;

    const { removeProduct } = cartStore;

    const handleRemoveProduct = useCallback(
      (productId: number) => {
        removeProduct(productId);
      },
      [removeProduct],
    );

    return (
      <DetailContainer {...rest}>
        <img src={imageSrc} alt={`Xícara de ${title}`} />

        <div>
          <h3>
            <span>{title}</span>

            <strong>{formatNumberToCurrency(price)}</strong>
          </h3>

          <Controllers>
            <AmountController product={product} index={index} />

            <button type="button" onClick={() => handleRemoveProduct(id)}>
              <Icon icon={TrashOutline} color={colors['secondary-500']} />
              Remover
            </button>
          </Controllers>
        </div>
      </DetailContainer>
    );
  },
);
