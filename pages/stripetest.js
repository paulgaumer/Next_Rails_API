import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';

const promise = loadStripe('pk_test_1Yvu7JYvlDZOvMAqG4IGInJM00REhvo0Lo');

const Stripetest = () => {
  const token = Cookies.get('token');
  const apiUrl = process.env.API_HOST;

  const handleClick = async (event) => {
    // Call your backend to create the Checkout session.
    const sessionId = await fetch(`${apiUrl}api/v1/charges`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
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
};

export default Stripetest;
