import React from 'react';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../../utils/subdomain';
import { parseRss } from '../../../utils/parseRss';

const Episode = ({
  initialPodcastInfo,
  initialDomain,
  loggedIn,
  rssFeed,
  id,
}) => {
  const episodes = rssFeed.items;
  const episode = episodes.find((ep) => ep.guid === id);
  const apiUrl = process.env.API_HOST;

  const handleClick = async () => {
    const res = await fetch(`${apiUrl}/api/v1/uploadaudio`, {
      method: 'get',
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h2>{episode.title}</h2>
      <p className="py-6">{episode.contentSnippet}</p>
      <button className="p-4 border border-black" onClick={handleClick}>
        Get transcription
      </button>
    </div>
  );
};

export default Episode;

Episode.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
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
      id,
    };
  }
};
