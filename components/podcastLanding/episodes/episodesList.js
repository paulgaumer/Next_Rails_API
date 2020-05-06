import React from 'react';
import EpisodeCard from './episodeCard';

const EpisodesList = ({ episodes, cover }) => {
  const episodesList = episodes.slice(0, 6);
  return (
    <div className="mx-auto mt-12 mb-20 max-w-7xl">
      <div className="sm:mx-20">
        <div className="mb-10 border-b border-gray-300">
          <h2 className="inline-block px-2 text-3xl font-semibold text-gray-600 border-b-2 border-red-400">
            All Episodes ({episodes.length})
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
