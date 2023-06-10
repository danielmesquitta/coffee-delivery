import { observer } from 'mobx-react';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { formatNumberToCurrency } from '~/helpers/formatNumberToCurrency';
import type { CheckInFormData } from '~/pages/CheckIn';
import { cartStore } from '~/store/cart';
import { userStore } from '~/store/user';
import { DetailCard } from '../DetailCard';
import { Details, DetailsFooter, DetailsFormContainer } from './styles';

const deliveryPrice = 3.5;

const formattedDeliveryPrice = formatNumberToCurrency(deliveryPrice);

export const DetailsForm = observer(() => {
  const { cart, totalPrice, emptyCart } = cartStore;
  const { setAddress, setPaymentMethod } = userStore;

  const navigate = useNavigate();

  const { handleSubmit } = useFormContext<CheckInFormData>();

  const handleDetailsSubmit = useCallback(
    ({ address, paymentMethod }: CheckInFormData) => {
      setAddress(address);

      setPaymentMethod(paymentMethod);

      emptyCart();

      navigate('/check-in/success', { replace: true });
    },
    [emptyCart, navigate, setAddress, setPaymentMethod],
  );

  const formattedTotalPrice = formatNumberToCurrency(totalPrice);

  const formattedTotalPriceWithDelivery = formatNumberToCurrency(
    totalPrice + deliveryPrice,
  );

  return (
    <DetailsFormContainer onSubmit={handleSubmit(handleDetailsSubmit)}>
      <Details>
        {cart.map((product, index) => (
          <DetailCard key={product.id} product={product} index={index} />
        ))}
      </Details>

      <DetailsFooter>
        <p>
          <span>Total de itens</span>
          <span>{formattedTotalPrice}</span>
        </p>

        <p>
          <span>Entrega</span>
          <span>{formattedDeliveryPrice}</span>
        </p>

        <p>
          <strong>Total</strong>
          <strong>{formattedTotalPriceWithDelivery}</strong>
        </p>

        <button type="submit">Confirmar pedido</button>
      </DetailsFooter>
    </DetailsFormContainer>
  );
});
