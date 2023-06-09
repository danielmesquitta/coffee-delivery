import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { TrashOutline } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import { AmountController } from '~/components/AmountController';
import { Icon } from '~/components/Icon';
import { formatNumberToCurrency } from '~/helpers/formatNumberToCurrency';
import type { CheckInFormData } from '~/pages/CheckIn';
import { cartStore } from '~/store/cart';
import { userStore } from '~/store/user';
import { defaultTheme } from '~/styles/themes/default';
import {
  Controllers,
  Detail,
  Details,
  DetailsFooter,
  DetailsFormContainer,
} from './styles';

const { colors } = defaultTheme;

const deliveryPrice = 3.5;

export const DetailsForm = observer(() => {
  const { cart, removeProduct, totalPrice, emptyCart } = cartStore;
  const { setAddress, setPaymentMethod } = userStore;

  const navigate = useNavigate();

  const { handleSubmit } = useFormContext<CheckInFormData>();

  const handleRemoveProduct = useCallback(
    (productId: number) => {
      removeProduct(productId);
    },
    [removeProduct],
  );

  const handleDetailsSubmit = useCallback(
    ({ address, paymentMethod }: CheckInFormData) => {
      setAddress(address);

      setPaymentMethod(paymentMethod);

      emptyCart();

      navigate('/check-in/success', { replace: true });
    },
    [emptyCart, navigate, setAddress, setPaymentMethod],
  );

  return (
    <DetailsFormContainer onSubmit={handleSubmit(handleDetailsSubmit)}>
      <Details>
        {cart.map((product, index) => {
          const { id, imageSrc, title, price } = product;
          return (
            <Detail key={id}>
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
            </Detail>
          );
        })}
      </Details>

      <DetailsFooter>
        <p>
          <span>Total de itens</span>
          <span>{formatNumberToCurrency(totalPrice)}</span>
        </p>

        <p>
          <span>Entrega</span>
          <span>{formatNumberToCurrency(deliveryPrice)}</span>
        </p>

        <p>
          <strong>Total</strong>
          <strong>{formatNumberToCurrency(totalPrice + deliveryPrice)}</strong>
        </p>

        <button type="submit">Confirmar pedido</button>
      </DetailsFooter>
    </DetailsFormContainer>
  );
});
