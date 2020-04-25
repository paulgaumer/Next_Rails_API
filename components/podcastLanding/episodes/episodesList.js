import React from 'react';
import EpisodeCard from './episodeCard';

const EpisodesList = ({ episodes, cover }) => {
  const episodesList = episodes.slice(0, 4);
  return (
    <div className="mx-auto my-20 max-w-7xl">
      <div className="mx-20">
        <div className="mb-10 border-b border-gray-300">
          <h2 className="inline-block px-2 text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
            All Episodes
          </h2>
        </div>
        {episodesList.map((ep, i) => {
          return <EpisodeCard ep={ep} epIndex={i} key={ep.guid} />;
        })}
      </div>
    </div>
  );
};

export default EpisodesList;
