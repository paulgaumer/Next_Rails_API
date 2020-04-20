import React from 'react';
import Episode from './episode';

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
        {episodesList.map((ep) => {
          return <Episode ep={ep} key={ep.guid} />;
        })}
      </div>
    </div>
  );
};

export default EpisodesList;
