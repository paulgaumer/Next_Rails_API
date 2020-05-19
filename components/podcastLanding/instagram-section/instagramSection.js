import React, { useEffect, useState, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import Spinner from './Spinner.js';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const InstagramSection = ({ podcastId }) => {
  const apiUrl = process.env.API_HOST;
  const [instagram, setInstagram] = useState([]);
  const [loading, setLoading] = useState(true);

  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';

  useEffect(() => {
    async function fetchInstagram() {
      const res = await fetch(`${apiUrl}/api/v1/fetch_instagram/${podcastId}`);
      const data = await res.json();
      setLoading(false);
      setInstagram(data.instagram);
    }
    fetchInstagram();
  }, []);

  return (
    <div className="pt-16 pb-20 mx-auto max-w-7xl">
      <div className="mx-6 sm:mx-20">
        <div className="flex mb-10">
          <h2
            className={`flex-shrink-0 inline-block px-2 text-2xl font-semibold text-gray-600 border-b-2  md:text-3xl ${themeOff(
              isThemed,
              'border-red-400'
            )}`}
            style={{ borderColor: themeOn(isThemed, colors.primary) }}
          >
            Fresh on Instagram
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
                      src={pic.media_url}
                      controls
                      className="object-cover object-center w-full h-32 rounded-sm md:h-64"
                    ></video>
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
