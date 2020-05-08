import { useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/podcastLanding/layout/layout';
import EpisodeShow from '../../components/podcastLanding/episodes/episodeShow';
import Header from '../../components/podcastLanding/header/header';
import Cta from '../../components/podcastLanding/cta/cta';
import { GlobalDispatchContext } from '../../context/globalContextProvider';
import { getSubdomain } from '../../utils/subdomain';

const EpisodePage = ({ podData, theme }) => {
  const setTheme = useContext(GlobalDispatchContext);
  setTheme({ type: 'SET_THEME', payload: theme });

  const { episode } = podData;
  return (
    <Layout>
      <Header data={podData} pageType={'ep'} />
      <Cta data={podData} />
      <EpisodeShow episode={episode} />
    </Layout>
  );
};

export default EpisodePage;

EpisodePage.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
  const subdomain = getSubdomain(ctx.req);
  const apiUrl = process.env.API_HOST;

  const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}/${id}`, {
    method: 'get',
  });
  const data = await res.json();

  return {
    podData: data.podcast,
    theme: data.podcast.theme,
  };
};
