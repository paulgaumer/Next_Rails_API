import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const FormattedDiv = styled.div`
  line-height: 1.625;
  color: #1a202c; /* gray-900 */
  strong {
    font-weight: 600;
  }
  p {
    padding-bottom: 0.75rem;
  }
  h1,
  h2,
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
    color: #fc8181; /* red-400 */
  }
  a:hover {
    text-decoration: underline;
  }
  p > img {
    padding-bottom: 1rem;
  }
  p > iframe {
    /* display: inline; */
    margin: 0 auto;
    padding: 16px 0;
  }

  #transcript-speaker {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;

const Transcription = ({ episode }) => {
  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';

  return (
    <>
      <div className="flex mb-8">
        <h2
          className="flex-shrink-0 inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2"
          style={{ borderColor: themeOn(isThemed, colors.primary) }}
        >
          Transcription
        </h2>
        <div className="w-full border-b border-gray-300"></div>
      </div>
      <FormattedDiv
        dangerouslySetInnerHTML={{ __html: episode.transcription }}
      />
    </>
  );
};

const EpisodeShow = ({ episode }) => {
  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';
  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-6 pt-12">
        <div className="mb-14">
          <div className="flex mb-8">
            <h2
              className="flex-shrink-0 inline-block px-2 text-2xl text-3xl font-semibold text-gray-600 border-b-2"
              style={{ borderColor: themeOn(isThemed, colors.primary) }}
            >
              Show Notes
            </h2>
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <FormattedDiv
            dangerouslySetInnerHTML={{ __html: episode.show_notes }}
            primary={themeOn(isThemed, colors.primary)}
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
