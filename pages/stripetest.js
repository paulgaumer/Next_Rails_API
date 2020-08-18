import React, { useState, useEffect } from 'react';
// import { Elements, StripeProvider } from 'react-stripe-elements';
import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import PaymentForm from '../components/marketingLanding/components/paymentForm';

const promise = loadStripe('pk_test_1Yvu7JYvlDZOvMAqG4IGInJM00REhvo0Lo');

const Stripetest = () => {
  const handleClick = async (event) => {
    // Call your backend to create the Checkout session.
    const sessionId = await fetch(`${process.env.API_HOST}api/v1/charges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data.sessionId;
      });
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await promise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );

  // const [windowLoaded, setWindowLoaded] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     setWindowLoaded(true);
  //   }
  // }, []);

  // if (windowLoaded) {
  //   return (
  //     <div>
  //       <Elements stripe={promise}>
  //         <PaymentForm />
  //       </Elements>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p>No window yet!</p>
  //     </div>
  //   );
  // }
};

export default Stripetest;
