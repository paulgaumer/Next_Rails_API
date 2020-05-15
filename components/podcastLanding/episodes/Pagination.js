import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const Pagination = ({
  episodesPerPage,
  totalEpisodes,
  paginate,
  currentPage,
}) => {
  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  const activeNumber = themeOff(
    isThemed,
    'text-red-400 border-red-400 focus:text-indigo-800 focus:border-indigo-700'
  );
  const passiveNumber =
    'hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-400 text-gray-500';

  return (
    <nav className="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0">
      <div
        className={`flex flex-1 w-0 cursor-pointer ${
          currentPage === 1 ? 'invisible' : ''
        }`}
        onClick={() => paginate(currentPage - 1)}
      >
        <a className="inline-flex items-center pt-4 pr-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400">
          <svg
            className="w-5 h-5 mr-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </a>
      </div>
      <div className="hidden md:flex">
        {pageNumbers.map((number, i) => {
          return (
            <a
              key={`page-${i}`}
              onClick={() => paginate(number)}
              className={`cursor-pointer inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 transition duration-150 ease-in-out border-t-2 border-transparent focus:outline-none ${
                number === currentPage ? activeNumber : passiveNumber
              }`}
              style={
                number === currentPage
                  ? {
                      color: themeOn(isThemed, colors.primary),
                      borderColor: themeOn(isThemed, colors.primary),
                    }
                  : {}
              }
            >
              {number}
            </a>
          );
        })}
      </div>
      <div
        className={`flex justify-end flex-1 w-0 cursor-pointer ${
          currentPage === pageNumbers.slice(-1)[0] ? 'invisible' : ''
        }`}
        onClick={() => paginate(currentPage + 1)}
      >
        <a className="inline-flex items-center pt-4 pl-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400">
          Next
          <svg
            className="w-5 h-5 ml-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
