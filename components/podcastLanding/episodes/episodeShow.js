import React from 'react';
import styled from 'styled-components';

const FormattedDiv = styled.div`
  line-height: 1.625;
  color: #1a202c; /* gray-900 */
  strong {
    font-weight: 600;
  }
  p {
    padding-bottom: 0.75rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d3748; /* gray-800 */
    padding: 1rem 0;
  }
  h4 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #4a5568; /* gray-700 */
    padding: 1.25rem 0 0.75rem;
  }
  a {
    color: red;
  }
  a:hover {
    text-decoration: underline;
  }
  p > iframe {
    /* display: inline; */
    margin: 0 auto;
    padding: 16px 0;
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
      <div className="px-6 pt-12 md:mx-20">
        <div className="mb-14">
          <div className="mb-8 border-b border-gray-300">
            <h2 className="inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
              Show Notes
            </h2>
          </div>
          <FormattedDiv
            dangerouslySetInnerHTML={{ __html: episode.show_notes }}
          />
        </div>
        {episode.transcription && episode.transcription !== 'In Progress' && (
          <div className="mb-14">
            <Transcription episode={episode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeShow;
