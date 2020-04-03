import React from 'react';
// import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import AudioPlayer from './audioPlayer';
import {} from '../../utils/subdomain';

const PodcastLanding = ({ data }) => {
  return (
    <div>
      <h1>Landing Page for:{data.name}</h1>

      <h2>Description</h2>
      <p>{data.description}</p>
      <AudioPlayer player={data.audio_player} />
    </div>
  );
};

export default PodcastLanding;

PodcastLanding.getInitialProps = async function(ctx) {
  const subdomain = getSubdomain(ctx.req);
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
