import React from 'react';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import { redirect } from '../../utils/redirect';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import CrmSection from '../../components/dashboard/crm/crm-list';

const CrmPage = ({ podcastData, currentDomain, crmItems }) => {
  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <Head>
        <title>CRM | Podwii</title>
      </Head>
      <CrmSection crmItems={crmItems} />
    </DashboardLayout>
  );
};
export default CrmPage;

CrmPage.getInitialProps = async function (ctx) {
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

  if (!data.podcast) {
    redirect(ctx, '/errors/rssfeed');
  }

  const resCrm = await fetch(`${apiUrl}api/v1/crm_items`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
  const dataCrm = await resCrm.json();

  return {
    podcastData: data,
    currentDomain: domain,
    crmItems: dataCrm.items.reverse(),
  };
};
