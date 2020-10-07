import { TOGGLE_CART_DROPDOWN } from './cartTypes';

const initialState = {
  hidden: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
