import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';
import { createEpisode, updateEpisode } from '../apiCalls/handleFetch';

const EditorContainer = styled.div`
  .tox-statusbar__branding {
    display: none;
  }
`;

const EpisodeDetails = ({ podEpisode, podId }) => {
  const apiUrl = process.env.API_HOST;
  const tinyKey = process.env.TINYMCE_API_KEY;

  const [episode, setEpisode] = useState(podEpisode);
  const [showNotes, setShowNotes] = useState(podEpisode.show_notes);
  const [transcription, setTranscription] = useState(podEpisode.transcription);
  const [speakerNumber, setSpeakerNumber] = useState(1);
  const [uploaded, setUploaded] = useState(false);

  const handleEditorChange = (content, editor) => {
    // console.log('Content was updated:', content);
    setShowNotes(content);
  };

  const downloadTranscription = async () => {
    const res = await fetch(`${apiUrl}api/v1/gettranscription`);
    const data = await res.json();
    data.status === 'COMPLETED' && setTranscription(data.transcript);
  };

  useEffect(() => {
    if (transcription === 'IN_PROGRESS') {
      downloadTranscription();
    }
  }, []);

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
    const res = await fetch(`${apiUrl}api/v1/uploadaudio`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transcription: { speakers: speakerNumber },
      }),
    });
    const data = await res.json();
    if (data.status === 'QUEUED' || data.status === 'IN_PROGRESS') {
      setUploaded(true);
      setTranscription('IN_PROGRESS');
      saveEpisode('IN_PROGRESS');
    }
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
                  <Editor
                    initialValue={showNotes}
                    apiKey={tinyKey}
                    init={{
                      height: 500,
                      menubar: false,
                      elementpath: false,
                      body_class: 'editor-body',
                      content_style: '.editor-body { font-size: 0.875rem }',
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | link image media |',
                      media_alt_source: false,
                      media_poster: false,
                      default_link_target: '_blank',
                      link_context_toolbar: true,
                      image_title: false,
                      /* enable automatic uploads of images represented by blob or data URIs*/
                      automatic_uploads: true,
                      /*
    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here we add custom filepicker only to Image dialog
  */
                      file_picker_types: 'image',
                      /* and here's our custom image picker*/
                      file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        /*
      Note: In modern browsers input[type="file"] is functional without
      even adding it to the DOM, but that might not be the case in some older
      or quirky browsers like IE, so you might want to add it to the DOM
      just in case, and visually hide it. And do not forget do remove it
      once you do not need it anymore.
    */

                        input.onchange = function () {
                          var file = this.files[0];

                          var reader = new FileReader();
                          reader.onload = function () {
                            /*
          Note: Now we need to register the blob in TinyMCEs image blob
          registry. In the next release this part hopefully won't be
          necessary, as we are looking to handle it internally.
        */
                            var id = 'blobid' + new Date().getTime();
                            var blobCache =
                              tinymce.activeEditor.editorUpload.blobCache;
                            var base64 = reader.result.split(',')[1];
                            var blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);

                            /* call the callback and populate the Title field with the file name */
                            cb(blobInfo.blobUri(), { title: file.name });
                          };
                          reader.readAsDataURL(file);
                        };

                        input.click();
                      },
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </EditorContainer>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="transcription"
                  className="block pb-4 text-sm font-medium leading-5 text-gray-700"
                >
                  Transcription
                </label>
                {!transcription && !uploaded && (
                  <>
                    <div className="max-w-xs rounded-md shadow-sm">
                      <select
                        id="speakers"
                        class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                      className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200"
                    >
                      Get your transcription now
                    </button>
                  </>
                )}
                {transcription === 'IN_PROGRESS' && (
                  <p>Transcription has started...</p>
                )}
                {uploaded && <p>Transcription has started...</p>}
                {/* {transcription !== null && transcription !== 'IN_PROGRESS' && (
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
