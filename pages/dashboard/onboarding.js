import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';

const updateRss = async (rss) => {
  const token = Cookies.get('token');
  const apiUrl = process.env.API_HOST;
  const res = await fetch(`${apiUrl}/api/v1/dashboard/edit`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      podcast: { feed_url: rss },
    }),
  });
  if (res.status === 200) {
    Router.push('/dashboard');
  } else {
    alert(res.errors);
  }
};

const onboarding = () => {
  const [rss, setRss] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRss(rss);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your rss feed"
          value={rss}
          onChange={(e) => setRss(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default onboarding;
