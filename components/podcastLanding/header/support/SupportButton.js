import React from 'react';

const SupportButton = () => {
  return (
    <span className="inline-flex flex-shrink-0 rounded-md">
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-white bg-opacity-25 border border-transparent rounded md:px-4 md:py-3 md:rounded-full hover:bg-opacity-50 focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white active:bg-opacity-50"
      >
        <span className="flex">
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="hidden pl-2 md:inline-block">Support the show</span>
          <span className="pl-2 text-xs md:hidden">Support</span>
        </span>
      </button>
    </span>
  );
};

export default SupportButton;
