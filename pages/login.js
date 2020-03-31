import React, { useContext } from 'react';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { UserDispatchContext } from '../context/userContextProvider';

const LogIn = (props) => {
  const userDispatch = useContext(UserDispatchContext);

  const login = async () => {
    const res = await fetch('http://localhost:3000/api/users/sign_in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { email: 'paul@test.com', password: 'password' }
      })
    });
    const data = await res.json();
    console.log(data);
    Cookies.set('token', data.token, { expires: 1 });
    Router.push('/');

    // localStorage.setItem('userToken', data.token);

    // userDispatch({
    //   type: 'SET_CURRENT_USER',
    //   payload: data.token
    // });

    // return {
    //   examples: data
    // };
  };

  const handleClick = (e) => {
    login();
  };

  return (
    <Layout>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </Layout>
  );
};

export default LogIn;
