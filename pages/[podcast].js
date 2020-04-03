import React from 'react';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import AudioPlayer from '../components/landing/audioPlayer';

const PodcastHome = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.name} Podcast Landing Page</h1>

      <h2>Description</h2>
      <p>{data.description}</p>
      <AudioPlayer player={data.audio_player} />
    </div>
  );
};

export default PodcastHome;

PodcastHome.getInitialProps = async function({ req }) {
  const sub = req.url.slice(1);
  const apiUrl = process.env.API_HOST;

  const res = await fetch(`${apiUrl}/api/v1/landing/${sub}`, {
    method: 'get'
  });
  const data = await res.json();

  return {
    data
  };
};
