import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hg6gdCjDTrYmETq7cy8btWuWMUTlolpjG3sFr86T6BAIP8w4xPbYFvv1yC2KYZBo28J2hk4wXdnBoEH0lml8IxN00PCbYPshV';

  const onToken = (token) => {
    // console.log(token);
    alert('Payment Succesful!');
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

export default StripeButton;
