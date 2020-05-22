import { useContext, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import SEO from '../../components/seo/seo';
import Layout from '../../components/podcastLanding/layout/layout';
import EpisodeShow from '../../components/podcastLanding/episodes/episodeShow';
import Header from '../../components/podcastLanding/header/header';
import Cta from '../../components/podcastLanding/cta/cta';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../../context/globalContextProvider';
import { getSubdomain } from '../../utils/subdomain';

const EpisodePage = ({ podData, theme, podEp }) => {
  const setTheme = useContext(GlobalDispatchContext);
  const episodesList = useContext(GlobalStateContext).episodes;
  const recordEpisodesList = useContext(GlobalDispatchContext);

  useEffect(() => {
    setTheme({ type: 'SET_THEME', payload: theme });
    if (episodesList.length === 0) {
      recordEpisodesList({ type: 'LIST_EPISODES', payload: podData.episodes });
    }
  }, []);

  return (
    <Layout>
      <SEO
        title={podEp.title}
        description={podEp.description}
        subdomain={podData.subdomain}
        cover={podEp.cover_image}
        path={`/episodes/${podEp.guid}`}
      />
      <Header data={podData} episode={podEp} pageType={'ep'} />
      <Cta data={podData} border={true} />
      <EpisodeShow episode={podEp} />
    </Layout>
  );
};

export default EpisodePage;

EpisodePage.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
  const subdomain = getSubdomain(ctx.req);
  const apiUrl = process.env.API_HOST;

  const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}`);
  const data = await res.json();

  return {
    podData: data.podcast,
    podEp: data.podcast.episodes.find((e) => e.guid === id),
    theme: data.podcast.theme,
  };
};
