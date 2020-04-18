import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const EpisodeDetails = ({ episode }) => {
  const apiUrl = process.env.API_HOST;

  const [uploaded, setUploaded] = useState(false);
  const [transcript, setTranscript] = useState(null);

  const handleClick = async () => {
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
    <div>
      <h2>{episode.title}</h2>
      <p className="py-6">{episode.description}</p>
      <button className="p-4 border border-black" onClick={handleClick}>
        Get transcription
      </button>
      {uploaded === 'loading' && <p>Loading...</p>}
      {uploaded === true && <p>Transcription has started!</p>}
      <div className="mt-12">
        <h3>TRANSCRIPT</h3>
        {transcript !== null && <p>{transcript}</p>}
        <form>
          <textarea
            type="text"
            value={transcript}
            placeholder="No transcript yet"
          />
        </form>
      </div>
    </div>
  );
};

export default EpisodeDetails;
