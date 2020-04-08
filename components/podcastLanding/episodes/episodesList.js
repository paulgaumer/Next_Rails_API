import React from 'react';
import Episode from './episode';

const EpisodesList = ({ episodes, cover }) => {
  const episodesList = episodes.slice(0, 4);
  return (
    <div className="mx-auto my-20 max-w-7xl">
      <div className="flex justify-center">
        <h2 className="inline-block px-2 mb-10 text-3xl font-extrabold text-gray-800 border-b-2 border-gray-800">
          Recent Episodes
        </h2>
      </div>
      {episodesList.map((ep) => {
        return <Episode ep={ep} cover={cover} key={ep.guid} />;
      })}
    </div>
  );
};

export default EpisodesList;
