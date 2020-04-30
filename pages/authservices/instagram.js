import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

const InstagramAuth = ({ data }) => {
  return (
    <div>
      <p>Auth</p>

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

  const formBody = new FormData();
  formBody.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
  formBody.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);
  formBody.set('grant_type', authorization_code);
  formBody.set('redirect_uri', process.env.INSTAGRAM_OAUTH_REDIRECT);
  formBody.set('code', query.code);

  const shortRes = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: formBody,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
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

  return {
    data: longToken,
  };
};
