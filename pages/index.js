import { useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import PodcastLanding from '../components/podcastLanding/landing';
import MarketingLanding from '../components/marketingLanding/landing';
import { getSubdomain } from '../utils/subdomain';
import { GlobalDispatchContext } from '../context/globalContextProvider';

const Index = ({ podData, instagram, theme }) => {
  const setTheme = useContext(GlobalDispatchContext);
  podData !== null && setTheme({ type: 'SET_THEME', payload: theme });

  return podData === null ? (
    <MarketingLanding />
  ) : (
    <PodcastLanding data={podData} instagram={instagram} />
  );
};

export default Index;

Index.getInitialProps = async function (ctx) {
  const subdomain = getSubdomain(ctx.req);
  const marketingDomains = ['lvh', 'localhost:8080', 'podwii', 'podwee'];
  const apiUrl = process.env.API_HOST;

  if (marketingDomains.includes(subdomain)) {
    return {
      subdomain,
      podData: null,
      instagram: null,
    };
  } else {
    const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}`);
    const data = await res.json();

    return {
      podData: data.podcast,
      theme: data.podcast.theme,
    };
  }
};
