import React from 'react';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import DashboardLayout from '../../../components/dashboard/dashboardLayout/dashboardLayout';
import { getDomain } from '../../../utils/subdomain';
import { redirect } from '../../../utils/redirect';
import EpisodeDetails from '../../../components/dashboard/episodes/episodeDetails';

const EpisodePage = ({ podcastData, currentDomain }) => {
  const { episode, id } = podcastData.podcast;
  const { billing } = podcastData;

  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <Head>
        <title>{episode.title} | Podwii</title>
      </Head>
      <EpisodeDetails podEpisode={episode} podId={id} billing={billing} />
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
    redirect(ctx, '/signin');
  }

  const res = await fetch(`${apiUrl}api/v1/dashboard/${id}`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();

  if (!data.podcast) {
    redirect(ctx, '/errors/rssfeed');
  }

  return {
    podcastData: data,
    currentDomain: domain,
  };
};
