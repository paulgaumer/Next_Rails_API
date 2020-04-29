import React, { useEffect, useContext } from 'react';
import { GlobalDispatchContext } from '../../context/globalContextProvider';
import { GlobalStateContext } from '../../context/globalContextProvider';
import Layout from './layout/layout';
import Header from './header/header';
import HeaderContentIndex from './header/headerContentIndex';
import EpisodesList from './episodes/episodesList';
import Cta from './cta/cta';
import InstagramSection from './instagram-section/instagramSection';

const PodcastLanding = ({ data }) => {
  const episodesList = useContext(GlobalStateContext).episodes;
  const recordEpisodesList = useContext(GlobalDispatchContext);
  useEffect(() => {
    if (episodesList.length === 0)
      recordEpisodesList({ type: 'LIST_EPISODES', payload: data.episodes });
  }, []);

  return (
    <div>
      <Layout>
        <Header data={data}>
          <HeaderContentIndex data={data} />
        </Header>
        <Cta />
        <EpisodesList episodes={data.episodes} cover={data.coverUrl} />
        <InstagramSection />
        <Cta />
      </Layout>
    </div>
  );
};

export default PodcastLanding;
