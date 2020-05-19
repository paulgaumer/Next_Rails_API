import React from 'react';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import { redirect } from '../../utils/redirect';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import IntegrationSection from '../../components/dashboard/integration/Integration';

const IntegrationPage = ({ podcastData, currentDomain }) => {
  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <Head>
        <title>Integration | Podwii</title>
      </Head>
      <IntegrationSection podcastData={podcastData} />
    </DashboardLayout>
  );
};
export default IntegrationPage;

IntegrationPage.getInitialProps = async function (ctx) {
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
