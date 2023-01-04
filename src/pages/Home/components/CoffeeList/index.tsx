import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Cart } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { AmountController } from '~/components/AmountController';
import { Icon } from '~/components/Icon';
import { useCartContext } from '~/contexts/cart';
import { formatNumberToCurrency } from '~/helpers/formatNumberToCurrency';
import { products } from '~/reducers/cart/data';
import { defaultTheme } from '~/styles/themes/default';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTags,
  CoffeeListContainer
} from './styles';

const { colors } = defaultTheme;

const productsFormValidationSchema = zod.object({
  products: zod.array(
    zod.object({ id: zod.number().min(1), amount: zod.number().min(0) }),
  ),
});

type CartFormData = zod.infer<typeof productsFormValidationSchema>;

export const CoffeeList = () => {
  const { cart } = useCartContext();

  const navigate = useNavigate();

  const productsForm = useForm<CartFormData>({
    resolver: zodResolver(productsFormValidationSchema),
    defaultValues: {
      products: products.map(({ id }) => {
        const selectedProduct = cart.find((product) => product.id === id);

        return { id, amount: selectedProduct?.amount ?? 0 };
      }),
    },
  });

  const { handleSubmit } = productsForm;

  const handleGoToCart = useCallback(() => {
    if (cart.length === 0) return;

    navigate('/check-in');
  }, [navigate, cart]);

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <form onSubmit={handleSubmit(handleGoToCart)}>
        <ul>
          <FormProvider {...productsForm}>
            {products.map(
              ({ id, imageSrc, tags, title, description, price }, index) => (
                <Card key={id}>
                  <CardHeader>
                    <img src={imageSrc} alt={`Xícara de ${title}`} />

                    <CardTags>
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </CardTags>
                  </CardHeader>

                  <CardContent>
                    <strong>{title}</strong>

                    <p>{description}</p>
                  </CardContent>

                  <CardFooter>
                    <p>
                      <small>R$</small>
                      {formatNumberToCurrency(price).replace('R$', '')}
                    </p>

                    <AmountController productId={id} index={index} />

                    <button type="submit">
                      <Icon icon={Cart} size={22} color={colors['gray-200']} />
                    </button>
                  </CardFooter>
                </Card>
              ),
            )}
          </FormProvider>
        </ul>
      </form>
    </CoffeeListContainer>
  );
};
