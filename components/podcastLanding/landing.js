import React from 'react';
// import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import AudioPlayer from './audioPlayer';

const PodcastHome = ({ data }) => {
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

PodcastHome.getInitialProps = async function(ctx) {
  const subdomain = ctx.req.headers.host.split('.')[0];
  console.log(subdomain);
  const apiUrl = process.env.API_HOST;
  const res = await fetch(`${apiUrl}/api/v1/landing/${subdomain}`, {
    method: 'get'
  });
  const data = await res.json();

  return {
    data
  };
};
