import React from 'react';
import Layout from './layout/layout';
import Header from './header/header';
import AmplitudePlayer from './audio-player/amplitudePlayer';
import EpisodesList from './episodes/episodesList';
import Cta from './cta/cta';

const PodcastLanding = ({ data }) => {
  return (
    <div>
      <Layout>
        <Header data={data} />
        <EpisodesList episodes={data.episodes} cover={data.coverUrl} />
        <Cta />
      </Layout>
      <div className="fixed bottom-0 z-20 w-full">
        <AmplitudePlayer />
      </div>
    </div>
  );
};

export default PodcastLanding;
