import { createContext, useCallback, useContext, useState } from 'react';
import { products } from './data';
import {
  ProductsContextData,
  ProductsContextProviderProps,
  SelectedProduct,
} from './types';

const ProductsContext = createContext({} as ProductsContextData);

export const ProductsContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    [],
  );

  const totalPrice = Number(
    selectedProducts
      .reduce((total, product) => {
        return total + product.price * Number(product.amount);
      }, 0)
      .toFixed(2),
  );

  const addProduct = useCallback((id: number) => {
    setSelectedProducts((state) => {
      const draft = [...state];

      const productIndex = draft.findIndex((product) => product.id === id);

      const productNotFoundInSelectedProducts = productIndex < 0;

      if (productNotFoundInSelectedProducts) {
        const product = products.find((product) => product.id === id);

        const productNotFoundInProducts = !product;

        if (productNotFoundInProducts) {
          throw new Error('Invalid product id');
        }

        draft.push({ ...product!, amount: 1, totalPrice: product.price });

        return draft;
      }

      const product = draft[productIndex];

      const newAmount = Number(product.amount) + 1;

      draft[productIndex] = {
        ...product,
        amount: newAmount,
        totalPrice: product.price * newAmount,
      };

      return draft;
    });
  }, []);

  const subtractProduct = useCallback((id: number) => {
    setSelectedProducts((state) => {
      const draft = [...state];

      const productIndex = state.findIndex((product) => product.id === id);

      const productNotFoundInSelectedProducts = productIndex < 0;

      if (productNotFoundInSelectedProducts) {
        return state;
      }

      const product = draft[productIndex];

      const amount = Number(product.amount);

      if (amount === 1) {
        draft.splice(productIndex, 1);

        return draft;
      }

      const newAmount = amount - 1;

      draft[productIndex] = {
        ...product,
        amount: newAmount,
        totalPrice: product.price * newAmount,
      };

      return draft;
    });
  }, []);

  const removeProduct = useCallback((id: number) => {
    setSelectedProducts((state) => {
      const draft = [...state];

      const productIndex = state.findIndex((product) => product.id === id);

      const productNotFoundInSelectedProducts = productIndex < 0;

      if (productNotFoundInSelectedProducts) {
        return state;
      }

      draft.splice(productIndex, 1);

      return draft;
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        selectedProducts,
        totalPrice,
        addProduct,
        subtractProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsContextProvider',
    );
  }

  return context;
};
