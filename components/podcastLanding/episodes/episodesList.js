import React, { useState, useContext } from 'react';
import EpisodeCard from './episodeCards/episodeCard';
import Pagination from './Pagination';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const EpisodesList = ({ episodes }) => {
  const [episodesList] = useState(episodes);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(5);

  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';

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
        <div className="flex mb-10">
          <h2
            className={`inline-block flex-shrink-0 px-2 text-2xl font-semibold text-gray-600 border-b-2 md:text-3xl ${themeOff(
              isThemed,
              'border-red-400'
            )}`}
            style={{ borderColor: themeOn(isThemed, colors.primary) }}
          >
            All Episodes ({episodes.length})
          </h2>
          <div className="w-full border-b border-gray-300"></div>
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
