import { useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import EpisodesList from '../../components/dashboard/episodes/episodesList';

const Dashboard = ({ podcastDb, initialDomain, loggedIn, podcastRss }) => {
  useEffect(() => {
    if (!loggedIn) {
      Router.push('/signin');
    }
  }, []);

  const episodes = podcastRss.items;

  return !loggedIn ? (
    <div />
  ) : (
    <DashboardLayout
      podcastDb={podcastDb}
      podcastRss={podcastRss}
      currentDomain={initialDomain}
    >
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
    podcastDb: data,
    initialDomain: domain,
    loggedIn: true,
    podcastRss: data.feed,
  };
};
