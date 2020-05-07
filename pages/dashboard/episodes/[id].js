import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import DashboardLayout from '../../../components/dashboard/dashboardLayout/dashboardLayout';
import { getDomain } from '../../../utils/subdomain';
import { redirect } from '../../../utils/redirect';
import EpisodeDetails from '../../../components/dashboard/episodes/episodeDetails';

const EpisodePage = ({ podcastData, currentDomain }) => {
  const { episode, id } = podcastData.podcast;

  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <EpisodeDetails podEpisode={episode} podId={id} />
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

  return {
    podcastData: data,
    currentDomain: domain,
  };
};
