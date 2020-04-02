import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';

const saveForm = async (info) => {
  const apiUrl = process.env.API_HOST;
  const token = Cookies.get('token');
  const res = await fetch(`${apiUrl}/api/v1/dashboard/edit`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({
      podcast: { name: info }
    })
  });
};

const NameForm = ({ podcastName }) => {
  const [name, setName] = useState(podcastName);
  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveForm(name);
  };

  return (
    <div>
      <h2>Your Podcast's name</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default NameForm;
