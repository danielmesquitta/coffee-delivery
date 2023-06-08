import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Cart } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { AmountController } from '~/components/AmountController';
import { Icon } from '~/components/Icon';
import { api } from '~/helpers/api';
import { formatNumberToCurrency } from '~/helpers/formatNumberToCurrency';
import { cartStore } from '~/store/cart';
import { Product } from '~/store/types';
import { defaultTheme } from '~/styles/themes/default';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTags,
  CoffeeListContainer,
} from './styles';

const { colors } = defaultTheme;

const productsFormValidationSchema = zod.object({
  products: zod.array(
    zod.object({ id: zod.number().min(1), amount: zod.number().min(0) }),
  ),
});

type CartFormData = zod.infer<typeof productsFormValidationSchema>;

const { cart, addProduct } = cartStore;

const CoffeeListComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api<Product[]>('/products');

      setProducts(response);
    };

    fetchProducts();
  }, []);

  const productsForm = useForm<CartFormData>({
    resolver: zodResolver(productsFormValidationSchema),
    defaultValues: {
      products: products.map(({ id }) => {
        const selectedProduct = cart.find((product) => product.id === id);

        return { id, amount: selectedProduct?.amount ?? 0 };
      }),
    },
  });

  const handleGoToCart = useCallback(
    (product: Product) => {
      const productIndex = cart.findIndex(({ id }) => product.id === id);

      const cartDoesNotHaveThisProduct = productIndex === -1;

      if (cartDoesNotHaveThisProduct) {
        addProduct(product);
      }

      navigate('/check-in');
    },
    [navigate],
  );

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <form>
        <ul>
          <FormProvider {...productsForm}>
            {products.map((product, index) => {
              const { id, imageSrc, tags, title, description, price } = product;

              return (
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

                    <AmountController product={product} index={index} />

                    <button
                      type="button"
                      onClick={() => handleGoToCart(product)}
                    >
                      <Icon icon={Cart} size={22} color={colors['gray-200']} />
                    </button>
                  </CardFooter>
                </Card>
              );
            })}
          </FormProvider>
        </ul>
      </form>
    </CoffeeListContainer>
  );
};

export const CoffeeList = observer(CoffeeListComponent);
