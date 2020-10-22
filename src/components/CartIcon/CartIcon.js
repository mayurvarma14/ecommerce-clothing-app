import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { toggleCartDropdown } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default connect(
  (state) => ({ itemCount: selectCartItemsCount(state) }),
  { toggleCartDropdown }
)(CartIcon);
