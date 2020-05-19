import React from 'react';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { getDomain } from '../../utils/subdomain';
import { redirect } from '../../utils/redirect';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';

const FormContainer = styled.div``;

const SupportPage = ({ podcastData, currentDomain }) => {
  return (
    <DashboardLayout podcastData={podcastData} currentDomain={currentDomain}>
      <Head>
        <title>Support | Podwii</title>
      </Head>
      <FormContainer>
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/shreUvyZTIzA5LSG6?backgroundColor=orange"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="970px"
          style={{ background: 'transparent' }}
        ></iframe>
      </FormContainer>
    </DashboardLayout>
  );
};
export default SupportPage;

SupportPage.getInitialProps = async function (ctx) {
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
