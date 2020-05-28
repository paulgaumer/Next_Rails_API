import React, { useState } from 'react';
import Router from 'next/router';
import TinyEditor from '../text-editor/TinyEditor';
import { editPodcast, editTheme } from '../apiCalls/handleFetch';
import ColorPicker from '../../utils/colorPicker/ColorPicker';
import themes from '../../themes/themes';

const ThemeCheckInput = ({
  theme,
  setHeaderBackgroundColor,
  setHeaderTextColor,
  setSelectedColorTheme,
  selectedColorTheme,
}) => {
  return (
    <div className="flex items-center my-2 md:my-0">
      <input
        id={theme.name}
        type="radio"
        className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
        checked={selectedColorTheme === theme.name}
        onChange={() => {
          setHeaderBackgroundColor(theme.headerBackground);
          setHeaderTextColor(theme.headerText);
          setSelectedColorTheme(theme.name);
        }}
      />

      <label
        htmlFor={theme.name}
        className="flex items-center justify-center w-32 h-16 ml-3 rounded-md"
        style={{ background: theme.headerBackground }}
      >
        <p className="text-2xl font-bold" style={{ color: theme.headerText }}>
          Hello
        </p>
      </label>
    </div>
  );
};

const PodcastInfo = ({ podcastData }) => {
  const { podcast } = podcastData;
  const { theme } = podcast;
  const [transEditor, setTransEditor] = useState(null);
  const [podcastDetails, setPodcastDetails] = useState(podcast);
  const [podcastDescription, setPodcastDescription] = useState(
    podcastDetails.description
  );

  const [primaryColor, setPrimaryColor] = useState(theme.colors.primary);
  const [headerTextColor, setHeaderTextColor] = useState(
    theme.colors.headerText ? theme.colors.headerText : '#ffffff'
  );
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(
    theme.colors.headerBackground ? theme.colors.headerBackground : '#000000'
  );
  const [selectedColorTheme, setSelectedColorTheme] = useState(
    theme.colors.activeTheme
  );

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color.hex);
  };
  const handleHeaderTextColorChange = (color) => {
    setHeaderTextColor(color.hex);
    setSelectedColorTheme('custom');
  };
  const handleHeaderBackgroundColorChange = (color) => {
    setHeaderBackgroundColor(color.hex);
    setSelectedColorTheme('custom');
  };

  const setEditor = (editor, type) => {
    if (type === 'transcription') {
      setTransEditor(editor);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTheme = {
      colors: {
        primary: primaryColor,
        headerText: headerTextColor,
        headerBackground: headerBackgroundColor,
        activeTheme: selectedColorTheme,
      },
    };
    const updatedPodcast = {
      title: podcastDetails.title,
      description: podcastDescription,
      subdomain: podcastDetails.subdomain,
      feed_url: podcastDetails.feed_url,
    };
    const resPodcast = await editPodcast(updatedPodcast);
    const resTheme = await editTheme(updatedTheme, podcast.theme.id);
    resPodcast === 200 && resTheme === 204
      ? Router.push('/dashboard/podcast')
      : alert('There has been an error');
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
        <div className="pt-8 mt-8 sm:mt-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Podcast Basic Info
            </h3>
            <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-6 sm:mt-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Name of your podcast
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    id="title"
                    defaultValue={podcastDetails.title}
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
                <div className="flex max-w-lg rounded-md">
                  <input
                    id="subdomain"
                    defaultValue={podcastDetails.subdomain}
                    onChange={(e) => handleChange(e.target)}
                    className="block transition duration-150 ease-in-out rounded-none shadow-sm form-input rounded-l-md sm:text-sm sm:leading-5"
                  />
                  <span className="inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 shadow-sm rounded-r-md bg-gray-50 sm:text-sm">
                    .podwii.com
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Describe your podcast
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <p className="mb-2 text-sm text-gray-500 sm:pt-2">
                  This will be the description visible on the main page.
                </p>
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <TinyEditor
                    value={podcastDescription}
                    setValue={setPodcastDescription}
                    height={200}
                    type="podcast-description"
                    setEditor={setEditor}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="feed_url"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Your rss feed
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    id="feed_url"
                    defaultValue={podcastDetails.feed_url}
                    onChange={(e) => handleChange(e.target)}
                    className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                  ></input>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="instagram"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Primary theme color
              </label>
              <div className="relative flex items-center mt-1 sm:mt-0 sm:col-span-2">
                <ColorPicker
                  color={primaryColor}
                  handleColorChange={handlePrimaryColorChange}
                />
              </div>
            </div>
            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="instagram"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Header Text color
              </label>
              <div className="relative flex items-center mt-1 sm:mt-0 sm:col-span-2">
                <ColorPicker
                  color={headerTextColor}
                  handleColorChange={handleHeaderTextColorChange}
                />
              </div>
            </div>
            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="instagram"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Header Background color
              </label>
              <div className="relative flex items-center mt-1 sm:mt-0 sm:col-span-2">
                <ColorPicker
                  color={headerBackgroundColor}
                  handleColorChange={handleHeaderBackgroundColorChange}
                />
              </div>
            </div>
            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <div className="flex items-center h-full">
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px"
                >
                  Or pick an existing theme
                </label>
              </div>
              {themes.map((theme) => {
                return (
                  <ThemeCheckInput
                    theme={theme}
                    setSelectedColorTheme={setSelectedColorTheme}
                    setHeaderTextColor={setHeaderTextColor}
                    setHeaderBackgroundColor={setHeaderBackgroundColor}
                    selectedColorTheme={selectedColorTheme}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* *************** */}
      {/* SAVE BUTTONS */}
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

export default PodcastInfo;
