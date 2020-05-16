import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import TinyEditor from '../text-editor/TinyEditor';
import { createEpisode, updateEpisode } from '../apiCalls/handleFetch';

const EpisodeDetails = ({ podEpisode, podId }) => {
  const headlinerUrl = (url) => {
    if (url.includes('?')) {
      return url.split('?')[0];
    } else {
      return url;
    }
  };

  const apiUrl = process.env.API_HOST;
  const [episode, setEpisode] = useState(podEpisode);
  const [showNotes, setShowNotes] = useState(podEpisode.show_notes);
  const [transcription, setTranscription] = useState(podEpisode.transcription);
  const [audioUrl] = useState(headlinerUrl(podEpisode.enclosure.url));
  const [speakerNumber, setSpeakerNumber] = useState(1);
  const [uploaded, setUploaded] = useState(false);

  const handleChange = (target, e) => {
    setEpisode({
      ...episode,
      [target.id]: target.value,
    });
  };

  const saveEpisode = async (transcription) => {
    const newEpisode = {
      ...episode,
      show_notes: showNotes,
      transcription,
      podcast_id: podId,
    };

    if (newEpisode.id !== null) {
      const res = await updateEpisode(newEpisode);
      res === 204
        ? Router.push(`/dashboard/episodes/${newEpisode.guid}`)
        : alert('There has been an error');
    } else {
      const res = await createEpisode(newEpisode);
      res === 204
        ? Router.push(`/dashboard/episodes/${newEpisode.guid}`)
        : alert('There has been an error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEpisode();
  };

  const handleUploadAudio = async () => {
    const newEpisode = {
      ...episode,
      show_notes: showNotes,
      transcription: 'In Progress',
      podcast_id: podId,
    };

    const reqBody =
      podEpisode.id === null
        ? {
            episode: {
              ...newEpisode,
            },
            transcription: { speakers: speakerNumber, ep_id: podEpisode.id },
          }
        : { transcription: { speakers: speakerNumber, ep_id: podEpisode.id } };

    const res = await fetch(`${apiUrl}api/v1/uploadaudio`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...reqBody,
      }),
    });
    const data = await res.json();
    setUploaded(true);
    setTranscription('In Progress');
    // saveEpisode('IN_PROGRESS');
  };

  return (
    <>
      <Head>
        <script
          async
          defer
          src="https://widget.headliner.app/js/sdk.js"
          type="text/javascript"
          data-widget-key="tTP9DYAnxhPmp9KGsBQxGNvw6"
        ></script>
      </Head>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Edit your Episode
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                This information will be displayed on the episode page
              </p>
            </div>
            <div className="grid grid-cols-1 row-gap-6 col-gap-4 mt-6 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Your Audiogram with Headliner
                </label>
                <div
                  className="mt-1 rounded-md shadow-sm"
                  style={{ maxWidth: '22rem' }}
                >
                  <div
                    className="headliner-share"
                    data-audio-url={audioUrl}
                    data-clip-title={podEpisode.title}
                    data-color="rgb(55, 231, 185)"
                    data-image-url={podEpisode.cover_image.url}
                    // data-transcript-url="http://url.to/transcript.vtt"
                  ></div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-5 text-gray-700 uppercase"
                >
                  Title
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="title"
                    type="text"
                    value={episode.title}
                    className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    onChange={(e) => handleChange(e.target)}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="summary"
                  className="block text-sm font-medium leading-5 text-gray-700 uppercase"
                >
                  Summary
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="summary"
                    rows="7"
                    value={episode.summary}
                    className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                    onChange={(e) => handleChange(e.target)}
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  The summary will be displayed on your homepage
                </p>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="showNotes"
                  className="block text-sm font-medium leading-5 text-gray-700 uppercase"
                >
                  Show notes
                </label>

                <TinyEditor value={showNotes} setValue={setShowNotes} />
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="transcription"
                  className="block pb-4 text-sm font-medium leading-5 text-gray-700 uppercase"
                >
                  Transcription
                </label>
                {!transcription && !uploaded && (
                  <>
                    <div className="flex items-center max-w-xs rounded-md">
                      <p className="pr-2 text-gray-700">Number of speakers</p>
                      <select
                        id="speakers"
                        class="block form-select transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                        onChange={(e) =>
                          setSpeakerNumber(parseInt(e.target.value))
                        }
                        value={speakerNumber}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={handleUploadAudio}
                      className="inline-flex items-center px-4 py-2 mt-4 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200"
                    >
                      Get your transcription now
                    </button>
                  </>
                )}
                {transcription === 'In Progress' && (
                  <div className="flex items-center">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mr-2 text-blue-500"
                    >
                      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p>
                      Awesome, your transcription is being processed! Long
                      episodes can take up to 1h, come back in a bit...
                    </p>
                  </div>
                )}
                {/* {uploaded && <p>Transcription has started...</p>} */}
                {transcription !== null && transcription !== 'In Progress' && (
                  <TinyEditor
                    value={transcription}
                    setValue={setTranscription}
                  />
                )}
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
    </>
  );
};

export default EpisodeDetails;
