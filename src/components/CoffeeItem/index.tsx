import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { Cart } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import { AmountController } from '~/components/AmountController';
import { Icon } from '~/components/Icon';
import { cartStore } from '~/store/cart';
import { Product } from '~/store/cart/types';
import { defaultTheme } from '~/styles/themes/default';
import { formatNumberToCurrency } from '~/utils/formatNumberToCurrency';
import {
  CoffeeItemContainer,
  CoffeeItemContent,
  CoffeeItemFooter,
  CoffeeItemHeader,
  CoffeeItemTags,
} from './styles';
import { CoffeeItemProps } from './types';

const { colors } = defaultTheme;

export const CoffeeItem = observer(
  ({ product, index, ...rest }: CoffeeItemProps) => {
    const { addProduct, cart } = cartStore;

    const navigate = useNavigate();

    const { description, imageSrc, price, tags, title } = product;

    const handleGoToCart = useCallback(
      (product: Product) => {
        const productIndex = cart.findIndex(({ id }) => product.id === id);

        const cartDoesNotHaveThisProduct = productIndex === -1;

        if (cartDoesNotHaveThisProduct) {
          addProduct(product);
        }

        navigate('/check-in');
      },
      [addProduct, cart, navigate],
    );

    return (
      <CoffeeItemContainer {...rest}>
        <CoffeeItemHeader>
          <img src={imageSrc} alt={`Xícara de ${title}`} />

          <CoffeeItemTags>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </CoffeeItemTags>
        </CoffeeItemHeader>

        <CoffeeItemContent>
          <strong>{title}</strong>

          <p>{description}</p>
        </CoffeeItemContent>

        <CoffeeItemFooter>
          <p>
            <small>R$</small>
            {formatNumberToCurrency(price).replace('R$', '')}
          </p>

          <AmountController product={product} index={index} />

          <button type="button" onClick={() => handleGoToCart(product)}>
            <Icon icon={Cart} size={22} color={colors['gray-200']} />
          </button>
        </CoffeeItemFooter>
      </CoffeeItemContainer>
    );
  },
);
