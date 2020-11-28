import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cartActions';

const StripeButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hg6gdCjDTrYmETq7cy8btWuWMUTlolpjG3sFr86T6BAIP8w4xPbYFvv1yC2KYZBo28J2hk4wXdnBoEH0lml8IxN00PCbYPshV';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
        description: `Your total is $${price}`,
      },
    })
      .then((response) => {
        clearCart();
        alert('succesful payment');
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce App"
      billingAddress
      shippingAddress
      image="./favicon.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect(null, { clearCart })(StripeButton);
