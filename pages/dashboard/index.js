import { useState, useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../utils/subdomain';
import DashboardLayout from '../../components/dashboard/dashboardLayout/dashboardLayout';
import PodcastDetails from '../../components/dashboard/podcastDetails';

const Dashboard = ({
  initialPodcastInfo,
  initialDomain,
  loggedIn,
  rssFeed,
}) => {
  const [podcastDb] = useState(initialPodcastInfo);
  const [podcastRss] = useState(rssFeed);
  const [domain] = useState(initialDomain);

  useEffect(() => {
    if (!loggedIn) {
      Router.push('/signin');
    }
  }, []);

  if (!loggedIn) {
    return <div></div>;
  } else {
    return (
      <DashboardLayout podcast={podcastDb} currentDomain={domain}>
        {rssFeed !== null && (
          <img src={rssFeed.image.url} alt="" className="w-20 h-20 rounded" />
        )}
        <div>
          <ul>
            {podcastRss.items.map((episode) => {
              return (
                <li key={episode.guid}>
                  <Link
                    href="/dashboard/episodes/[id]"
                    as={`/dashboard/episodes/${episode.guid}`}
                  >
                    <a>{episode.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <PodcastDetails podcastDb={podcastDb} podcastRss={podcastRss} />
      </DashboardLayout>
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
  }

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
    rssFeed: data.feed,
  };
};
