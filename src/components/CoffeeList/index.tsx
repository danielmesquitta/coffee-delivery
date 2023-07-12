import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '~/services/api';
import { cartStore } from '~/store/cart';
import { Product } from '~/store/cart/types';
import { CoffeeItem } from '../CoffeeItem';
import { CoffeeListContainer } from './styles';

const productsFormValidationSchema = z.object({
  products: z.array(
    z.object({ id: z.number().min(1), amount: z.number().min(0) }),
  ),
});

type ProductsFormData = z.infer<typeof productsFormValidationSchema>;

export const CoffeeList = observer(() => {
  const { cart } = cartStore;

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api<Product[]>('/products').then(({ data }) => setProducts(data));
  }, []);

  const productsForm = useForm<ProductsFormData>({
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
              <CoffeeItem key={product.id} index={index} product={product} />
            ))}
          </FormProvider>
        </ul>
      </form>
    </CoffeeListContainer>
  );
});
