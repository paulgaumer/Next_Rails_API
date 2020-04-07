import React from 'react';
import Layout from './layout/layout';
import Header from './header/header';
import EpisodesList from './episodes/episodesList';
import Cta from './cta/cta';

const PodcastLanding = ({ data }) => {
  return (
    <Layout>
      <Header data={data} />
      <EpisodesList episodes={data.episodes} cover={data.coverUrl} />
      <Cta />
    </Layout>
  );
};

export default PodcastLanding;
