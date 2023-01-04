export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  SUBTRACT_PRODUCT = 'SUBTRACT_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  EMPTY_CART = 'EMPTY_CART',
}

export const addProductAction = (productId: number) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      productId,
    },
  };
};

export const subtractProductAction = (productId: number) => {
  return {
    type: ActionTypes.SUBTRACT_PRODUCT,
    payload: {
      productId,
    },
  };
};

export const removeProductAction = (productId: number) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
};

export const emptyCartAction = () => {
  return {
    type: ActionTypes.EMPTY_CART,
  };
};
