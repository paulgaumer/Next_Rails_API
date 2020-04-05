import React, { useState } from 'react';
import Router from 'next/router';
import { editPodcast } from './handleFetch';

const Index = ({ podcast }) => {
  const [podcastDetails, setPodcastDetails] = useState({
    name: podcast.name,
    subdomain: podcast.subdomain,
    description: podcast.description,
    audio_player: podcast.audio_player,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editPodcast(podcastDetails);
    res === 200 ? Router.push('/dashboard') : alert('There has been an error');
  };

  const handleChange = (target, e) => {
    setPodcastDetails({
      ...podcastDetails,
      [target.id]: target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Podcast Page Details
            </h3>
            <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-6 sm:mt-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Name of your podcast
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    id="name"
                    defaultValue={podcastDetails.name}
                    onChange={(e) => handleChange(e.target)}
                    className="flex-1 block w-full transition duration-150 ease-in-out rounded-none rounded-md form-input sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="subdomain"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Url for your podcast page
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    id="subdomain"
                    defaultValue={podcastDetails.subdomain}
                    onChange={(e) => handleChange(e.target)}
                    className="flex-1 block w-full transition duration-150 ease-in-out rounded-none form-input rounded-l-md sm:text-sm sm:leading-5"
                  />
                  <span className="inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 sm:text-sm">
                    .podwii.xyz
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                What is your podcast about?
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <textarea
                    id="description"
                    defaultValue={podcastDetails.description}
                    onChange={(e) => handleChange(e.target)}
                    rows="3"
                    className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  This will be the description showing on the main page.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="audio_player"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Insert your podcast player
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <textarea
                    id="audio_player"
                    defaultValue={podcastDetails.audio_player}
                    onChange={(e) => handleChange(e.target)}
                    rows="5"
                    className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Check with your podcast host for a snippet of code starting
                  with "script"
                </p>
                <div className="max-w-lg mt-6">
                  <p className="pb-3 text-sm text-gray-500">Preview:</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: podcastDetails.audio_player,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Logo
              </label>
              <div className="mt-2 sm:mt-0 sm:col-span-2">
                <div className="flex items-center">
                  <span className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    <svg
                      className="w-full h-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <span className="ml-5 rounded-md shadow-sm">
                    <button
                      type="button"
                      className="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    >
                      Change
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover_photo"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Cover photo
              </label>
              <div className="mt-2 sm:mt-0 sm:col-span-2">
                <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-1 text-sm text-gray-600">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                      >
                        Upload a file
                      </button>
                      or drag and drop
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-8 border-t border-gray-200">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            >
              Cancel
            </button>
          </span>
          <span className="inline-flex ml-3 rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Index;
