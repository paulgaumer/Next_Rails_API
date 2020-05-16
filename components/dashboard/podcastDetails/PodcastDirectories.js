import React, { useState } from 'react';
import Router from 'next/router';
import { editPodcast } from '../apiCalls/handleFetch';
import ApplePodcastIcon from '../../icons/directories/applePodcastIcon';
import GooglePodcastIcon from '../../icons/directories/googlePodcastIcon';
import SpotifyIcon from '../../icons/directories/spotifyIcon';
import RssIcon from '../../icons/directories/rssIcon';

const DirectoryIcon = ({ directory }) => {
  const width = 'sm:w-8 w-6';
  const height = 'sm:h-8 h-6';

  switch (directory) {
    case 'apple_podcasts':
      return <ApplePodcastIcon width={width} height={height} />;
    case 'google_podcasts':
      return <GooglePodcastIcon width={width} height={height} />;
    case 'spotify':
      return <SpotifyIcon width={width} height={height} />;
    case 'rss':
      return <RssIcon width={width} height={height} />;
    default:
      return null;
  }
};

const DirectoryInput = ({ directory, defaultValue, handleChange }) => {
  const directoryName = directory.split('_').join(' ');
  return (
    <div className="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="title"
        className="flex items-center block text-sm font-medium leading-5 text-gray-700 capitalize sm:mt-px"
      >
        <DirectoryIcon directory={directory} />
        <span className="ml-2">{directoryName}</span>
      </label>
      <div className="mt-2 sm:mt-0 sm:col-span-2">
        <div className="flex max-w-lg rounded-md shadow-sm">
          <input
            id={directory}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target)}
            className="flex-1 block w-full transition duration-150 ease-in-out rounded-none rounded-md form-input sm:text-sm sm:leading-5"
          />
        </div>
      </div>
    </div>
  );
};

const PodcastDirectories = ({ podcastData }) => {
  const { podcast } = podcastData;
  const [podcastDirectories, setPodcastDirectories] = useState(
    podcast.directories
  );

  const directoriesList = ['apple_podcasts', 'google_podcasts', 'spotify'];

  const setDefaultValue = (directory) =>
    podcastDirectories !== null && directory in podcastDirectories
      ? podcastDirectories[directory]
      : '';

  const handleChange = (target, e) => {
    setPodcastDirectories({
      ...podcastDirectories,
      [target.id]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPodcast = {
      ...podcast,
      directories: podcastDirectories,
    };
    const resPodcast = await editPodcast(updatedPodcast);
    resPodcast === 200
      ? Router.push('/dashboard/podcast')
      : alert('There has been an error');
  };

  return (
    <div className="pt-20">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Directories
              </h3>
              <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
                These directories will be listed on your website
              </p>
            </div>

            <div className="mt-6 sm:mt-5">
              {directoriesList.map((directory) => {
                const defaultValue = setDefaultValue(directory);
                return (
                  <DirectoryInput
                    directory={directory}
                    defaultValue={defaultValue}
                    handleChange={handleChange}
                  />
                );
              })}
              <DirectoryInput
                directory={'rss'}
                defaultValue={podcast.feed_url}
                handleChange={handleChange}
              />
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
    </div>
  );
};

export default PodcastDirectories;
