import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartDropdown } from '../../redux/cart/cartActions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, toggleCartDropdown }) => {
  let navigate = useNavigate();
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
          navigate('/checkout');
          toggleCartDropdown();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default connect(
  createStructuredSelector({
    cartItems: selectCartItems,
  }),
  { toggleCartDropdown }
)(CartDropdown);
