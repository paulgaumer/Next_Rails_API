import React, { useState } from 'react';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import { getDomain } from '../../../utils/subdomain';
import { parseRss } from '../../../utils/parseRss';

const getTranscript = async () => {
  const apiUrl = process.env.API_HOST;
  const res = await fetch(`${apiUrl}/api/v1/gettranscription`, {
    method: 'get',
  });
  const data = await res.json();
};

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

  const [uploaded, setUploaded] = useState(false);
  const [transcript, setTranscript] = useState(null);

  const handleClick = async () => {
    setUploaded('loading');
    const res = await fetch(`${apiUrl}/api/v1/uploadaudio`, {
      method: 'get',
    });
    const data = await res.json();
    if (res.status === 200) {
      setUploaded(true);
      const resTrans = await fetch(`${apiUrl}/api/v1/gettranscription`, {
        method: 'get',
      });
      const dataTrans = await resTrans.json();
      setTranscript(dataTrans.transcriptFileUri);
    }
    console.log(data);
  };

  return (
    <div>
      <h2>{episode.title}</h2>
      <p className="py-6">{episode.contentSnippet}</p>
      <button className="p-4 border border-black" onClick={handleClick}>
        Get transcription
      </button>
      {uploaded === 'loading' && <p>Loading...</p>}
      {uploaded === true && <p>Transcription has started!</p>}
      <div className="mt-12">
        <h3>TRANSCRIPT</h3>
        {transcript !== null && <p>{transcript}</p>}
      </div>
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
