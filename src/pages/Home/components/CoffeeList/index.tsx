import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { api } from '~/services/api';
import { cartStore } from '~/store/cart';
import { Product } from '~/store/cart/types';
import { Card } from '../Card';
import { CoffeeListContainer } from './styles';

const productsFormValidationSchema = zod.object({
  products: zod.array(
    zod.object({ id: zod.number().min(1), amount: zod.number().min(0) }),
  ),
});

type CartFormData = zod.infer<typeof productsFormValidationSchema>;

export const CoffeeList = observer(() => {
  const { cart } = cartStore;

  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <form>
        <ul>
          <FormProvider {...productsForm}>
            {products.map((product, index) => (
              <Card key={product.id} index={index} product={product} />
            ))}
          </FormProvider>
        </ul>
      </form>
    </CoffeeListContainer>
  );
});
