import fetch from 'isomorphic-unfetch';
import Layout from '../../components/podcastLanding/layout/layout';
// import { getSubdomain } from '../utils/subdomain';
// import { parseRss } from '../utils/parseRss';
// import { sortDataPodcastLanding } from '../utils/sortData';

const EpisodePage = ({ data }) => {
  return (
    <Layout>
      <p>Hello</p>
    </Layout>
  );
};

export default EpisodePage;

// EpisodePage.getInitialProps = async function (ctx) {
//   const subdomain = getSubdomain(ctx.req);
//   const marketingDomains = ['lvh', 'localhost:8080', 'podwii', 'podwee'];
//   const apiUrl = process.env.API_HOST;
//   // let rssFeed = null;

//   if (marketingDomains.includes(subdomain)) {
//     return {
//       subdomain,
//       data: null,
//     };
//   } else {
//     const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}`, {
//       method: 'get',
//     });
//     const data = await res.json();
//     const rssFeed = data.feed;
//     const podcastInfo = sortDataPodcastLanding(data, rssFeed);

//     return {
//       data: podcastInfo,
//     };
//   }
// };
