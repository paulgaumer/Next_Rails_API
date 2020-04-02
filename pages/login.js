import React, { useState } from 'react';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';

const login = async (user) => {
  const res = await fetch('http://localhost:3000/users/sign_in', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: { email: user.email, password: user.password }
    })
  });
  const token = res.headers.get('Authorization');
  // const data = await res.json();
  Cookies.set('token', token, { expires: 1 });
  Router.push('/dashboard');
};

const LogInPage = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <Layout>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default LogInPage;
