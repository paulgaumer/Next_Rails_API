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
    // <Layout>
    //   <h1>Welcome to your dashboard {state.user.email}</h1>
    //   <h2>Here is your Landing Page</h2>
    //   <Link href={`http://${state.subdomain}.${domain}`}>
    //     <a target="_blank">{state.name}</a>
    //   </Link>

    //   <NameForm podcastName={state.name} />
    //   <AudioPlayerForm podcastPlayer={state.audio_player} />
    // </Layout>
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
