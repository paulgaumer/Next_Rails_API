import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const QuillDiv = styled.div`
  ${tw`text-gray-800`};

  h2 {
    ${tw`text-2xl`};
  }
  p {
    ${tw`leading-relaxed`};
  }
  a {
    ${tw`text-red-400 hover:text-red-500`};
  }
  iframe {
    width: 50%;
    height: 400px;
    margin: 0 auto;
  }
`;

const Transcription = ({ episode }) => {
  return (
    <>
      <div className="flex mb-10">
        <h2 className="flex-shrink-0 inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
          Transcription
        </h2>
        <div className="w-full border-b border-gray-300"></div>
      </div>
      <QuillDiv dangerouslySetInnerHTML={{ __html: episode.transcription }} />
    </>
  );
};

const EpisodeShow = ({ episode }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="pt-12 mx-20">
        <div className="mb-14">
          <div className="flex mb-10">
            <h2 className="flex-shrink-0 inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
              Show Notes
            </h2>
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <QuillDiv dangerouslySetInnerHTML={{ __html: episode.show_notes }} />
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
