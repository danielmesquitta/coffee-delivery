import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TrashOutline } from 'react-ionicons';
import * as zod from 'zod';
import { AmountController } from '../../../../components/AmountController';
import { Icon } from '../../../../components/Icon';
import { useProductsContext } from '../../../../contexts/products';
import { defaultTheme } from '../../../../styles/themes/default';
import {
  Controllers,
  Detail,
  Details,
  DetailsFooter,
  DetailsFormContainer,
} from './styles';

const { colors } = defaultTheme;

const productsFormValidationSchema = zod.object({
  products: zod.array(
    zod.object({ id: zod.number().min(1), amount: zod.number().min(0) }),
  ),
});

type ProductsFormData = zod.infer<typeof productsFormValidationSchema>;

export const DetailsForm = () => {
  const { selectedProducts, removeProduct, totalPrice } = useProductsContext();

  const productsForm = useForm<ProductsFormData>({
    resolver: zodResolver(productsFormValidationSchema),
    defaultValues: {
      products: selectedProducts.map(({ id, amount }) => ({ id, amount })),
    },
  });

  const handleRemoveProduct = useCallback(
    (productId: number) => {
      removeProduct(productId);
    },
    [removeProduct],
  );

  return (
    <DetailsFormContainer>
      <Details>
        <FormProvider {...productsForm}>
          {selectedProducts.map(
            ({ id, imageSrc, title, totalPrice }, index) => (
              <Detail key={id}>
                <img src={imageSrc} alt={`Xícara de ${title}`} />

                <div>
                  <h3>
                    <span>{title}</span>

                    <strong>R$ {totalPrice}</strong>
                  </h3>

                  <Controllers>
                    <AmountController productId={id} index={index} />

                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(id)}
                    >
                      <Icon
                        icon={TrashOutline}
                        color={colors['secondary-500']}
                      />
                      Remover
                    </button>
                  </Controllers>
                </div>
              </Detail>
            ),
          )}
        </FormProvider>
      </Details>

      <DetailsFooter>
        <p>
          <span>Total de itens</span> <span>R$ {totalPrice}</span>
        </p>

        <p>
          <span>Entrega</span> <span>R$ 3,50</span>
        </p>

        <p>
          <strong>Total</strong> <strong>R$ {totalPrice}</strong>
        </p>

        <button>Confirmar pedido</button>
      </DetailsFooter>
    </DetailsFormContainer>
  );
};
