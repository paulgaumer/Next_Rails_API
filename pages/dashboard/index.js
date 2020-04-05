import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import dynamic from 'next/dynamic';
import { getDomain } from '../../utils/subdomain';
import DashboardShell from '../../components/dashboard/dashboardShell';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const SigninPage = dynamic(() => import('../signin'));

const Dashboard = ({ initialPodcastInfo, initialDomain, loggedIn }) => {
  const [podcast, setPodcast] = useState(initialPodcastInfo);
  const [domain, setDomain] = useState(initialDomain);

  if (!loggedIn) {
    return <SigninPage />;
  } else {
    return (
      <DashboardShell podcast={podcast} currentDomain={domain}>
        <PodcastDetails podcast={podcast} />
      </DashboardShell>
    );
  }
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

    const data = await res.json();

    return {
      initialPodcastInfo: data,
      initialDomain: domain,
      loggedIn: true,
    };
  }
};
