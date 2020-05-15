import React, { useEffect, useContext } from 'react';
import { GlobalDispatchContext } from '../../context/globalContextProvider';
import { GlobalStateContext } from '../../context/globalContextProvider';
import SEO from '../seo/seo';
import Layout from './layout/layout';
import Header from './header/header';
import Cta from './cta/cta';
import AboutPodcast from './about/about';
import EpisodesList from './episodes/episodesList';
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
        <SEO
          title={data.title}
          description={data.description}
          subdomain={data.subdomain}
          cover={data.cover_image}
        />
        <Header data={data} pageType={'landing'} />
        <Cta data={data} />
        <AboutPodcast data={data} />
        <EpisodesList episodes={data.episodes} cover={data.coverUrl} />
        <InstagramSection podcastId={data.id} />
        <Cta data={data} />
      </Layout>
    </div>
  );
};

export default PodcastLanding;
