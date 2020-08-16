import React, { useState, useEffect } from 'react';
// import { Elements, StripeProvider } from 'react-stripe-elements';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/marketingLanding/components/paymentForm';

const promise = loadStripe('pk_test_1Yvu7JYvlDZOvMAqG4IGInJM00REhvo0Lo');

const Stripetest = () => {
  const [windowLoaded, setWindowLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWindowLoaded(true);
    }
  }, []);

  if (windowLoaded) {
    return (
      <div>
        <Elements stripe={promise}>
          <PaymentForm />
        </Elements>
      </div>
    );
  } else {
    return (
      <div>
        <p>No window yet!</p>
      </div>
    );
  }
};

export default Stripetest;
