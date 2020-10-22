import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from './cartTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';

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
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
