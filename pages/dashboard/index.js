import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { getDomain } from '../../utils/subdomain';
import DashboardShell from '../../components/dashboard/dashboardShell';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const SigninPage = dynamic(() => import('../signin'));

const Dashboard = ({ initialPodcastInfo, initialDomain, loggedIn }) => {
  const [podcast, setPodcast] = useState(initialPodcastInfo);
  const [domain, setDomain] = useState(initialDomain);

  useEffect(() => {
    if (!loggedIn) {
      Router.push('/signin');
    }
  }, []);

  if (!loggedIn) {
    return <div></div>;
  } else {
    return (
      <DashboardShell podcast={podcast} currentDomain={domain}>
        <PodcastDetails podcast={podcast} />
      </DashboardShell>
    );
  }

  return <div></div>;
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
  } else {
    const res = await fetch(`${apiUrl}/api/v1/dashboard`, {
      method: 'get',
      headers: {
        Authorization: token,
      },
    });

    console.log(res);
    const data = await res.json();

    return {
      initialPodcastInfo: data,
      initialDomain: domain,
      loggedIn: true,
    };
  }
};
