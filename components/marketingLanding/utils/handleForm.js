import fetch from 'isomorphic-unfetch';

export const submitAccessForm = async (details) => {
  const res = await fetch(
    `https://api.convertkit.com/v3/forms/1338003/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email: details,
      }),
    }
  );
  const data = await res.json();
  return {
    status: res.status,
    data: data,
  };
};
