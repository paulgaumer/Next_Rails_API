import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const EpisodeDetails = ({ episodeRss, episodeDb }) => {
  const apiUrl = process.env.API_HOST;

  const initialState = {
    title: !episodeDb ? episodeRss.title : episodeDb.title,
    summary: !episodeDb ? episodeRss.description : episodeDb.summary,
    showNotes: !episodeDb ? episodeRss.description : episodeDb.show_notes,
    transcription: !episodeDb ? null : episodeDb.transcription,
  };

  const [episode, setEpisode] = useState(initialState);
  const [uploaded, setUploaded] = useState(false);
  const [transcript, setTranscript] = useState(initialState.transcription);

  const handleChange = (target, e) => {
    setEpisode({
      ...episode,
      [target.id]: target.value,
    });
  };

  const handleUploadAudio = async () => {
    setUploaded('loading');
    const res = await fetch(`${apiUrl}/api/v1/uploadaudio`);
    const data = await res.json();
    if (res.status === 200) {
      setUploaded(true);
      const resTrans = await fetch(`${apiUrl}/api/v1/gettranscription`);
      const dataTrans = await resTrans.json();
      // console.log(dataTrans);
      setTranscript(dataTrans.transcript);
    }
    // console.log(data);
  };

  return (
    <>
      <form>
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
                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="showNotes"
                    rows="10"
                    value={episode.showNotes}
                    className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                    onChange={(e) => handleChange(e.target)}
                  ></textarea>
                </div>
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
                <button
                  type="button"
                  onClick={handleUploadAudio}
                  className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200"
                >
                  Get your transcription now
                </button>
                {uploaded === 'loading' && <p>Loading...</p>}
                {uploaded === true && <p>Transcription has started!</p>}
                {transcript !== null && (
                  <div className="mt-1 rounded-md shadow-sm">
                    <textarea
                      id="transcription"
                      rows="10"
                      value={transcript}
                      className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                      onChange={(e) => handleChange(e.target)}
                    ></textarea>
                  </div>
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
