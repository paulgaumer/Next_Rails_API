import React from 'react';
import styled from 'styled-components';

const FormattedDiv = styled.div`
  a {
    color: red;
  }
`;

const Transcription = ({ episode }) => {
  return (
    <>
      <div className="mb-10 border-b border-gray-300">
        <h2 className="inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
          Transcription
        </h2>
      </div>
      <FormattedDiv
        dangerouslySetInnerHTML={{ __html: episode.transcription }}
      />
    </>
  );
};

const EpisodeShow = ({ episode }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="pt-12 mx-20">
        <div className="mb-14">
          <div className="mb-10 border-b border-gray-300">
            <h2 className="inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
              Show Notes
            </h2>
          </div>
          <FormattedDiv
            dangerouslySetInnerHTML={{ __html: episode.show_notes }}
          />
        </div>
        {episode.transcription && (
          <div className="mb-14">
            <Transcription episode={episode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeShow;
