import { useState } from 'react';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';

const signup = async ({ email, password, subdomain }) => {
  const apiUrl = process.env.API_HOST;
  const res = await fetch(`${apiUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email,
        password
        // subdomain
      }
    })
  });
  const token = res.headers.get('Authorization');
  const data = await res.json();
  console.log(data);
  Cookies.set('token', token, { expires: 1 });
  // Router.push('/');
};

const SignUpPage = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
    subdomain: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(details);
  };
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [key]: value });
  };

  return (
    <Layout>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={details.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={details.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subdomain"
          placeholder="mypodcast"
          value={details.subdomain}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
};

export default SignUpPage;
