import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartDropdown } from '../../redux/cart/cartActions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, toggleCartDropdown }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          toggleCartDropdown();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default withRouter(
  connect(
    createStructuredSelector({
      cartItems: selectCartItems,
    }),
    { toggleCartDropdown }
  )(CartDropdown)
);
