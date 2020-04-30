import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

const InstagramAuth = ({ data }) => {
  return (
    <div>
      <p>Auth</p>
      <p>Token: {data !== null ? data.access_token : 'No token'}</p>

      {/* <button onClick={handleClick} className="p-4 border">
        Fetch Instagram
      </button> */}
    </div>
  );
};

export default InstagramAuth;

InstagramAuth.getInitialProps = async function ({ query }) {
  console.log(query.code);
  if (query.code === undefined) {
    return { data: null };
  }

  const searchParams = new URLSearchParams();
  searchParams.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
  searchParams.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);
  searchParams.set('grant_type', 'authorization_code');
  searchParams.set('redirect_uri', process.env.INSTAGRAM_OAUTH_REDIRECT);
  searchParams.set('code', query.code);

  const shortRes = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: searchParams,
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });
  const shortToken = await shortRes.json();
  console.log(shortToken);

  if (shortToken.access_token === undefined) {
    return { data: null };
  }

  const longRes = await fetch(
    `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${shortToken.access_token}`
  );
  const longToken = await longRes.json();
  console.log(longToken);

  if (longToken.access_token === undefined) {
    return { data: null };
  }

  return {
    data: longToken,
  };
};
