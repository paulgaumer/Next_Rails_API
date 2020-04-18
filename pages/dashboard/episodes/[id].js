import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import DashboardLayout from '../../../components/dashboard/dashboardLayout/dashboardLayout';
import { getDomain } from '../../../utils/subdomain';
import EpisodeDetails from '../../../components/dashboard/episodes/episodeDetails';

const EpisodePage = ({
  podcastDb,
  initialDomain,
  podcastRss,
  id,
  loggedIn,
}) => {
  const episodes = podcastRss.items;
  const episode = episodes.find((ep) => ep.guid === id);

  useEffect(() => {
    if (!loggedIn) {
      Router.push('/signin');
    }
  }, []);

  return !loggedIn ? (
    <div />
  ) : (
    <DashboardLayout podcast={podcastDb} currentDomain={initialDomain}>
      <EpisodeDetails episode={episode} />
    </DashboardLayout>
  );
};

export default EpisodePage;

EpisodePage.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
  const domain = getDomain(ctx.req);
  const { token } = nextCookie(ctx);
  const apiUrl = process.env.API_HOST;

  if (token === undefined) {
    return {
      loggedIn: false,
    };
  } else {
    const res = await fetch(`${apiUrl}/api/v1/dashboard`, {
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
      id,
    };
  }
};
