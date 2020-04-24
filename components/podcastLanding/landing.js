import React, { useEffect, useContext } from 'react';
import { GlobalDispatchContext } from '../../context/globalContextProvider';
import Layout from './layout/layout';
import Header from './header/header';
import AmplitudePlayer from './audio-player/amplitudePlayer';
import HeaderContentIndex from './header/headerContentIndex';
import EpisodesList from './episodes/episodesList';
import Cta from './cta/cta';

const PodcastLanding = ({ data }) => {
  const recordEpisodesList = useContext(GlobalDispatchContext);
  useEffect(() => {
    recordEpisodesList({ type: 'LIST_EPISODES', payload: data.episodes });
  }, []);

  return (
    <div>
      <Layout>
        <Header data={data}>
          <HeaderContentIndex data={data} />
        </Header>
        <EpisodesList episodes={data.episodes} cover={data.coverUrl} />
        <Cta />
      </Layout>
      <div className="fixed bottom-0 z-20 w-full">
        <AmplitudePlayer podcastCover={data.coverUrl} />
      </div>
    </div>
  );
};

export default PodcastLanding;
