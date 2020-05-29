import React, { useEffect, useState, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import Spinner from './Spinner.js';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const InstagramSection = ({ podcastId }) => {
  const apiUrl = process.env.API_HOST;
  const { theme, isThemed, instagramList, instagramName } = useContext(
    GlobalStateContext
  );

  const colors = isThemed ? theme.colors : '';

  const setInstaContext = useContext(GlobalDispatchContext);
  const setInstaNameContext = useContext(GlobalDispatchContext);
  const [instagram, setInstagram] = useState(
    instagramList.length >= 1 ? instagramList : []
  );
  const [instagramUserName, setInstagramUserName] = useState(
    instagramName ? instagramName : ''
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(instagram < 1);
    async function fetchInstagram() {
      const res = await fetch(`${apiUrl}/api/v1/fetch_instagram/${podcastId}`);
      const data = await res.json();

      const differences = data.instagram.filter(
        ({ value: id1 }) => !instagramList.some(({ value: id2 }) => id2 === id1)
      );

      if (differences.length >= 1) {
        setInstagram(data.instagram);
        setInstagramUserName(data.instagram[0].username);
        setInstaContext({
          type: 'SET_INSTAGRAM_LIST',
          payload: data.instagram,
        });
        setInstaNameContext({
          type: 'SET_INSTAGRAM_NAME',
          payload: data.instagram[0].username,
        });
      }
    }
    fetchInstagram();
  }, [instagram]);

  return (
    <div className="pt-8 pb-4 mx-auto md:pt-12 md:pb-12 max-w-7xl">
      <div className="mx-6 sm:mx-20">
        <div className="flex mb-6">
          <h2
            className={`flex-shrink-0 flex items-center inline-block pr-2 text-xl font-semibold text-gray-50 border-b-2 ${themeOff(
              isThemed,
              'border-red-400'
            )}`}
            style={{ borderColor: themeOn(isThemed, colors.primary) }}
          >
            <img
              src="/insta_colors.png"
              alt="instagram"
              className="w-6 h-6 mr-2"
            />
            <a
              href={`https://www.instagram.com/${instagramUserName}/`}
              target="_blank"
            >
              @{instagramUserName}
            </a>
          </h2>
          <div className="w-full border-b border-gray-300"></div>
        </div>
        {loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
        <div className="grid grid-cols-2 row-gap-2 col-gap-2 md:grid-cols-4">
          {instagram.length > 0 &&
            instagram.map((pic) => {
              return (
                <a href={pic.permalink} key={pic.id} target="_blank">
                  {pic.media_type === 'IMAGE' && (
                    <img
                      src={pic.media_url}
                      alt={pic.id}
                      className="object-cover object-center w-full h-32 rounded-sm md:h-64"
                    />
                  )}
                  {pic.media_type === 'VIDEO' && (
                    <video
                      autoPlay
                      loop
                      muted
                      controls
                      playsInline
                      className="object-cover object-center w-full h-32 rounded-sm md:h-64 video"
                    >
                      <source src={pic.media_url} />
                    </video>
                  )}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
