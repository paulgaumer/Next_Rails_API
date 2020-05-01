import React, { useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { createEpisode, updateEpisode } from '../apiCalls/handleFetch';
const ReactQuill =
  typeof window === 'object' ? require('react-quill') : () => false;

const EditorContainer = styled.div``;

const EpisodeDetails = ({ podEpisode, podId }) => {
  const apiUrl = process.env.API_HOST;

  // Needed to wait for user input stop
  let inputTimer = null;

  const [episode, setEpisode] = useState(podEpisode);
  const [showNotes, setShowNotes] = useState(podEpisode.show_notes);
  const [transcription, setTranscription] = useState(podEpisode.transcription);
  const [speakerNumber, setSpeakerNumber] = useState(1);
  const [uploaded, setUploaded] = useState(false);

  const handleChange = (target, e) => {
    setEpisode({
      ...episode,
      [target.id]: target.value,
    });
  };

  const handleShowNotesChange = (e) => {
    const duration = 1000;
    clearTimeout(inputTimer);
    inputTimer = setTimeout(() => {
      setShowNotes(e);
    }, duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEpisode = {
      ...episode,
      show_notes: showNotes,
      transcription,
      podcast_id: podId,
    };

    if (newEpisode.db_id) {
      const res = await updateEpisode(newEpisode);
      res === 204
        ? Router.push(`/dashboard/episodes/${newEpisode}`)
        : alert('There has been an error');
    } else {
      const res = await createEpisode(newEpisode);
      res === 204
        ? Router.push(`/dashboard/episodes/${newEpisode}`)
        : alert('There has been an error');
    }
  };

  const handleUploadAudio = async () => {
    setUploaded('loading');
    const res = await fetch(`${apiUrl}api/v1/uploadaudio`);
    const data = await res.json();
    if (res.status === 200) {
      setUploaded(true);
      const resTrans = await fetch(`${apiUrl}api/v1/gettranscription`);
      const dataTrans = await resTrans.json();
      // console.log(dataTrans);
      setTranscription(dataTrans.transcript);
    }
    // console.log(data);
  };

  return (
    <>
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
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Summary
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="summary"
                    rows="5"
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
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Show notes
                </label>
                <EditorContainer className="mt-1">
                  <ReactQuill
                    theme="snow"
                    id="showNotes"
                    value={showNotes}
                    onChange={handleShowNotesChange}
                  >
                    <div className="text-base bg-white sm:text-sm" />
                  </ReactQuill>
                </EditorContainer>
                {/* <p className="mt-2 text-sm text-gray-500">
                  Write a few sentences about yourself.
                </p> */}
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="transcription"
                  className="block pb-4 text-sm font-medium leading-5 text-gray-700"
                >
                  Transcription
                </label>
                <div class="max-w-xs rounded-md shadow-sm">
                  <select
                    id="speakers"
                    class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={(e) => setSpeakerNumber(parseInt(e.target.value))}
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
                  className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200"
                >
                  Get your transcription now
                </button>
                {uploaded === 'loading' && <p>Loading...</p>}
                {uploaded === true && <p>Transcription has started!</p>}
                {/* {transcription !== null && (
                  <ReactQuill
                    theme="snow"
                    id="transcription"
                    value={transcription}
                    onChange={setTranscription}
                  >
                    <div className="text-base bg-white sm:text-sm" />
                  </ReactQuill>
                )} */}
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
