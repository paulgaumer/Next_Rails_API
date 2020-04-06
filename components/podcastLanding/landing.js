import React from 'react';
import Layout from './layout/layout';
import Header from './header/header';

const PodcastLanding = ({ data }) => {
  return (
    <Layout>
      <Header name={data.name} audioPlayer={data.audio_player} />
    </Layout>
  );
};

export default PodcastLanding;
