import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Add, Remove } from 'react-ionicons';
import { useProductsContext } from '../../contexts/products';
import { defaultTheme } from '../../styles/themes/default';
import { Icon } from '../Icon';
import { AmountControllerContainer } from './styles';
import { AmountControllerProps } from './types';

const { colors } = defaultTheme;

export const AmountController = ({
  addButtonProps = {},
  subtractButtonProps = {},
  index,
  productId,
  ...inputProps
}: AmountControllerProps) => {
  const { addProduct, subtractProduct } = useProductsContext();

  const { register } = useFormContext();

  const { update, fields: f } = useFieldArray({
    name: 'products',
  });

  const fields = f as any as { amount: number }[];

  const handleAddButtonClick = useCallback(() => {
    const { amount } = fields[index];

    update(index, { amount: amount + 1, id: productId });

    addProduct(productId);
  }, [addProduct, fields, index, productId, update]);

  const handleSubtractButtonClick = useCallback(() => {
    const { amount } = fields[index];

    if (amount === 0) return;

    update(index, { amount: amount - 1, id: productId });

    subtractProduct(productId);
  }, [fields, index, productId, subtractProduct, update]);

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
        type="number"
        placeholder="0"
        value={fields[index]?.amount}
        {...inputProps}
        {...register(`products.${index}.amount`, { valueAsNumber: true })}
      />

      <button type="button" onClick={handleAddButtonClick} {...addButtonProps}>
        <Icon icon={Add} size={14} color={colors['secondary-500']} />
      </button>
    </AmountControllerContainer>
  );
};
