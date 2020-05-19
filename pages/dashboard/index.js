import nextCookie from 'next-cookies';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import { redirect } from '../../utils/redirect';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import EpisodesList from '../../components/dashboard/episodes/episodesList';

const Dashboard = ({ podcastData, currentDomain }) => {
  const episodes = podcastData.podcast.episodes;

  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <Head>
        <title>Dashboard | Podwii</title>
      </Head>
      <EpisodesList episodes={episodes} />
    </DashboardLayout>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async function (ctx) {
  const domain = getDomain(ctx.req);
  const { token } = nextCookie(ctx);
  const apiUrl = process.env.API_HOST;

  if (token === undefined) {
    redirect(ctx, '/signin');
  }

  const res = await fetch(`${apiUrl}api/v1/dashboard`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();

  return {
    podcastData: data,
    currentDomain: domain,
  };
};
