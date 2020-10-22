import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  console.log('Render dropdown');
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default connect((state) => ({
  cartItems: selectCartItems(state),
}))(CartDropdown);
