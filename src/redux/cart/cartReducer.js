import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from './cartTypes';
import { addItemToCart } from './cartUtils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
