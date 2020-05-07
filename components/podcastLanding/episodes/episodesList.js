import React, { useState } from 'react';
import EpisodeCard from './episodeCards/episodeCard';
import Pagination from './Pagination';

const EpisodesList = ({ episodes }) => {
  const [episodesList] = useState(episodes);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(5);

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodesList.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto mt-12 mb-20 max-w-7xl">
      <div className="mx-6 sm:mx-20">
        <div className="mb-10 border-b border-gray-300">
          <h2 className="inline-block px-2 text-2xl font-semibold text-gray-600 border-b-2 border-red-400 md:text-3xl">
            All Episodes ({episodes.length})
          </h2>
        </div>
        {currentEpisodes.map((ep, i) => {
          return <EpisodeCard ep={ep} epIndex={i} key={ep.guid} />;
        })}
        <Pagination
          episodesPerPage={episodesPerPage}
          totalEpisodes={episodesList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default EpisodesList;
