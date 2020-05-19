import React, { useEffect, useState, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import Spinner from './Spinner.js';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const InstagramSection = ({ podcastId }) => {
  const apiUrl = process.env.API_HOST;
  const [instagram, setInstagram] = useState([]);
  const [instagramUserName, setInstagramUserName] = useState('');
  const [loading, setLoading] = useState(true);

  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';

  useEffect(() => {
    async function fetchInstagram() {
      const res = await fetch(`${apiUrl}/api/v1/fetch_instagram/${podcastId}`);
      const data = await res.json();
      setLoading(false);
      setInstagram(data.instagram);
      setInstagramUserName(data.instagram[0].username);
    }
    fetchInstagram();
  }, []);

  return (
    <div className="pt-12 pb-4 mx-auto md:pb-12 max-w-7xl">
      <div className="mx-6 sm:mx-20">
        <div className="flex mb-10">
          <h2
            className={`flex-shrink-0 flex items-center inline-block pr-2 text-xl md:text-2xl font-semibold text-gray-50 border-b-2 ${themeOff(
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
