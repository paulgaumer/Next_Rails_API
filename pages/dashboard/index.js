import { useState, useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import { parseRss } from '../../utils/parseRss';
import DashboardShell from '../../components/dashboard/dashboardShell';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const Dashboard = ({
  initialPodcastInfo,
  initialDomain,
  loggedIn,
  rssFeed,
}) => {
  const [podcastDb, setPodcastDb] = useState(initialPodcastInfo);
  const [podcastRss, setPodcastRss] = useState(rssFeed);
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
      <DashboardShell podcast={podcastDb} currentDomain={domain}>
        {rssFeed !== null && (
          <img src={rssFeed.image.url} alt="" className="w-20 h-20 rounded" />
        )}
        <PodcastDetails podcastDb={podcastDb} podcastRss={podcastRss} />
      </DashboardShell>
    );
  }
};

export default Dashboard;

Dashboard.getInitialProps = async function (ctx) {
  const domain = getDomain(ctx.req);
  const { token } = nextCookie(ctx);
  const apiUrl = process.env.API_HOST;
  let rssFeed = null;

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
    if (data.feed_url !== null) {
      rssFeed = await parseRss(data.feed_url);
    }

    return {
      initialPodcastInfo: data,
      initialDomain: domain,
      loggedIn: true,
      rssFeed,
    };
  }
};
