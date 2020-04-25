import fetch from 'isomorphic-unfetch';
import PodcastLanding from '../components/podcastLanding/landing';
import MarketingLanding from '../components/marketingLanding/landing';
import { getSubdomain } from '../utils/subdomain';
// import { parseRss } from '../utils/parseRss';
// import { sortDataPodcastLanding } from '../utils/sortData';

const Index = ({ podData }) => {
  return podData === null ? (
    <MarketingLanding />
  ) : (
    <PodcastLanding data={podData} />
  );
};

export default Index;

Index.getInitialProps = async function (ctx) {
  const subdomain = getSubdomain(ctx.req);
  const marketingDomains = ['lvh', 'localhost:8080', 'podwii', 'podwee'];
  const apiUrl = process.env.API_HOST;
  // let rssFeed = null;

  if (marketingDomains.includes(subdomain)) {
    return {
      subdomain,
      podData: null,
    };
  } else {
    const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}`, {
      method: 'get',
    });
    const data = await res.json();

    return {
      podData: data.podcast,
    };
  }
};
