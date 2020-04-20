import fetch from 'isomorphic-unfetch';
import PodcastLanding from '../components/podcastLanding/landing';
import MarketingLanding from '../components/marketingLanding/landing';
import { getSubdomain } from '../utils/subdomain';
import { parseRss } from '../utils/parseRss';
import { sortDataPodcastLanding } from '../utils/sortData';

const Index = ({ data }) => {
  return data === null ? <MarketingLanding /> : <PodcastLanding data={data} />;
};

export default Index;

Index.getInitialProps = async function (ctx) {
  const subdomain = getSubdomain(ctx.req);
  const marketingDomains = ['lvh', 'localhost:8080', 'podwii'];
  const apiUrl = process.env.API_HOST;
  let rssFeed = null;

  if (marketingDomains.includes(subdomain)) {
    return {
      subdomain,
      data: null,
    };
  } else {
    const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}`, {
      method: 'get',
    });
    const data = await res.json();
    if (data.feed_url !== '') {
      rssFeed = await parseRss(data.feed_url);
    }

    const podcastInfo = sortDataPodcastLanding(data, rssFeed);

    return {
      data: podcastInfo,
    };
  }
};
