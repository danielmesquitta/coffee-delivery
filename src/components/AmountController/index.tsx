import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Add, Remove } from 'react-ionicons';
import { Icon } from '~/components/Icon';
import { cartStore } from '~/store/cart';
import { defaultTheme } from '~/styles/themes/default';
import { AmountControllerContainer } from './styles';
import type { AmountControllerProps } from './types';

const { colors } = defaultTheme;

const { addProduct, subtractProduct, getProductAmount } = cartStore;

const AmountControllerComponent = ({
  addButtonProps = {},
  subtractButtonProps = {},
  index,
  product,
  ...inputProps
}: AmountControllerProps) => {
  const productAmount = getProductAmount(product.id);

  const { register } = useFormContext();

  const { update } = useFieldArray({
    name: 'products',
  });

  const handleAddButtonClick = useCallback(() => {
    addProduct(product);

    update(index, { amount: productAmount, id: product.id });
  }, [index, product, productAmount, update]);

  const handleSubtractButtonClick = useCallback(() => {
    subtractProduct(product.id);

    update(index, { amount: productAmount, id: product.id });
  }, [index, product, productAmount, update]);

  return (
    <AmountControllerContainer>
      <input hidden {...register(`products.${index}.id`)} />

      <button
        type="button"
        onClick={handleSubtractButtonClick}
        {...subtractButtonProps}
      >
        <Icon icon={Remove} size={14} color={colors['secondary-500']} />
      </button>

      <input
        disabled
        type="number"
        placeholder="0"
        value={productAmount}
        {...inputProps}
        {...register(`products.${index}.amount`, { valueAsNumber: true })}
      />

      <button type="button" onClick={handleAddButtonClick} {...addButtonProps}>
        <Icon icon={Add} size={14} color={colors['secondary-500']} />
      </button>
    </AmountControllerContainer>
  );
};

export const AmountController = observer(AmountControllerComponent);
