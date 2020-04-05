import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import { getDomain } from '../../utils/subdomain';
import DashboardShell from '../../components/dashboard/dashboardShell';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const Dashboard = ({ initialPodcastInfo, initialDomain }) => {
  const [podcast, setPodcast] = useState(initialPodcastInfo);
  const [domain, setDomain] = useState(initialDomain);

  return (
    <DashboardShell podcast={podcast} currentDomain={domain}>
      <PodcastDetails podcast={podcast} />
    </DashboardShell>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async function (ctx) {
  const domain = getDomain(ctx.req);
  const { token } = nextCookie(ctx);
  const apiUrl = process.env.API_HOST;

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
  };
};
