import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

const InstagramSection = ({ podcastId }) => {
  const apiUrl = process.env.API_HOST;
  const [instagram, setInstagram] = useState([]);

  useEffect(() => {
    // async function fetchInstagram() {
    //   const res = await fetch(`${apiUrl}/api/v1/fetch_instagram/${podcastId}`);
    //   const data = await res.json();
    //   setInstagram(data.instagram);
    // }
    // fetchInstagram();
  }, []);

  return (
    <div className="mx-auto mt-32 mb-20 max-w-7xl">
      <div className="mx-20">
        <div className="flex items-center mb-10 border-b border-gray-300">
          <h2 className="inline-block px-2 text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
            Fresh on Instagram
          </h2>
          <div className="pl-4">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              >
                Follow
              </button>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 row-gap-2 col-gap-2">
          {instagram.length > 0 &&
            instagram.map((pic) => {
              return (
                <a href={pic.permalink} key={pic.id} target="_blank">
                  {pic.media_type === 'IMAGE' && (
                    <img
                      src={pic.media_url}
                      alt={pic.id}
                      className="object-cover object-center w-full h-64"
                    />
                  )}
                  {pic.media_type === 'VIDEO' && (
                    <video
                      src={pic.media_url}
                      controls
                      className="object-cover object-center w-full h-64"
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
