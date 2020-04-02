import React from 'react';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';

const PodcastHome = ({ data }) => {
  return (
    <div>
      <h1>Hello from your the {data.name} Podcast Landing Page</h1>

      <h2>Description</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default PodcastHome;

PodcastHome.getInitialProps = async function(ctx) {
  const { token } = nextCookie(ctx);

  const res = await fetch('http://localhost:3000/api/v1/dashboard', {
    method: 'get',
    headers: {
      Authorization: `${token}`
    }
  });
  const data = await res.json();

  return {
    data
  };
};
