import { useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const PodcastDetailsPage = ({
  podcastDb,
  initialDomain,
  loggedIn,
  podcastRss,
}) => {
  useEffect(() => {
    if (!loggedIn) {
      Router.push('/signin');
    }
  }, []);

  return !loggedIn ? (
    <div />
  ) : (
    <DashboardLayout
      podcastDb={podcastDb}
      podcastRss={podcastRss}
      currentDomain={initialDomain}
    >
      <PodcastDetails podcastDb={podcastDb} podcastRss={podcastRss} />
    </DashboardLayout>
  );
};
export default PodcastDetailsPage;

PodcastDetailsPage.getInitialProps = async function (ctx) {
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
