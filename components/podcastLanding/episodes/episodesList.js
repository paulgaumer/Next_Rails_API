import React from 'react';
import Episode from './episode';

const EpisodesList = ({ episodes, cover }) => {
  const episodesList = episodes.slice(0, 4);
  return (
    <div className="mx-auto my-20 max-w-7xl">
      <div className="mx-20">
        <h2 className="px-2 mb-10 text-3xl font-semibold text-gray-600 border-b border-gray-300 ">
          All Episodes
        </h2>
        {episodesList.map((ep) => {
          return <Episode ep={ep} key={ep.guid} />;
        })}
      </div>
    </div>
  );
};

export default EpisodesList;
