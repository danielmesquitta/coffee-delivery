import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { TrashOutline } from 'react-ionicons';
import { AmountController } from '~/components/AmountController';
import { Icon } from '~/components/Icon';
import { cartStore } from '~/store/cart';
import { Product } from '~/store/cart/types';
import { defaultTheme } from '~/styles/themes/default';
import { formatNumberToCurrency } from '~/utils/formatNumberToCurrency';
import { Controllers, DetailContainer } from './styles';
import { DetailCardProps } from './types';

const { colors } = defaultTheme;

export const DetailCard = observer(
  ({ product, index, ...rest }: DetailCardProps) => {
    const { setValue, getValues } = useFormContext();

    const { id, imageSrc, title, price } = product;

    const { removeProduct } = cartStore;

    const handleRemoveProduct = useCallback(
      (productId: number) => {
        removeProduct(productId);

        const products: Product[] = getValues('products');

        setValue(
          'products',
          products.filter(({ id }) => id !== productId),
        );
      },
      [getValues, removeProduct, setValue],
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
