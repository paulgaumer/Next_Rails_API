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
      podcast: { audio_player: info }
    })
  });
  Router.push('/dashboard');
};

const AudioPlayerForm = ({ podcastPlayer }) => {
  const [player, setPlayer] = useState(podcastPlayer);
  console.log(player);

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveForm(player);
  };

  return (
    <div>
      <h2>Your Podcast's name</h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={player}
          name="player"
          onChange={(e) => setPlayer(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
      <div
        dangerouslySetInnerHTML={{
          __html: player
        }}
      />

      {/* <iframe
        src={`https://www.buzzsprout.com/740042/3054469-08-becoming-a-tea-ceremony-master-in-japan-with-tyas-sosen?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F726084.js%3Fplayer%3Dsmall`}
        title="3054469-08-becoming-a-tea-ceremony-master-in-japan-with-tyas-sosen"
        width="100%"
        height="200"
        frameBorder="0"
        scrolling="no"
      ></iframe> */}
    </div>
  );
};

export default AudioPlayerForm;
