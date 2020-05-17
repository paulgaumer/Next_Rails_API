import { useEffect } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';

const InstagramAuth = ({ data }) => {
  useEffect(() => {
    data === 200 ? Router.push('/dashboard/integration') : null;
  }, []);

  return (
    <div>
      <h2 className="text-lg">Instagram Connection</h2>
      <p className="pt-2">
        {data === 200 ? 'Success' : 'Something went wrong'}
      </p>
    </div>
  );
};

export default InstagramAuth;

InstagramAuth.getInitialProps = async function (ctx) {
  const apiUrl = process.env.API_HOST;
  const { query } = ctx;
  const { token } = nextCookie(ctx);

  // Check if Instagram Auth sent back a code in the url
  if (query.code === undefined) {
    return { data: null };
  }

  // Get Short term token
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
  // console.log(shortToken);

  if (shortToken.access_token === undefined) {
    return { data: null };
  }

  // Get long term token
  const longRes = await fetch(
    `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${shortToken.access_token}`
  );
  const longToken = await longRes.json();
  // console.log(longToken);

  if (longToken.access_token === undefined) {
    return { data: null };
  }

  // Convert expiration time from seconds to date
  const expirationDate = new Date();
  expirationDate.setUTCSeconds(longToken.expires_in);

  // Save Access Token in DB
  const updates = {
    instagram_access_token: {
      access_token: longToken.access_token,
      expires_in: expirationDate,
    },
  };

  const res = await fetch(`${apiUrl}api/v1/dashboard/edit`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      podcast: {
        ...updates,
      },
    }),
  });
  res.status === 200
    ? console.log('Instagram connection ok')
    : console.log('Instagram connection error');

  return {
    data: res.status,
  };
};
