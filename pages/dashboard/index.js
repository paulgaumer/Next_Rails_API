import { useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import EpisodesList from '../../components/dashboard/episodes/episodesList';

const Dashboard = ({ podcastData, currentDomain, loggedIn }) => {
  useEffect(() => {
    if (!loggedIn) {
      Router.push('/signin');
    }
  }, []);

  const episodes = podcastData.podcast.items;

  return !loggedIn ? (
    <div />
  ) : (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
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
    return {
      loggedIn: false,
    };
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
    loggedIn: true,
  };
};
