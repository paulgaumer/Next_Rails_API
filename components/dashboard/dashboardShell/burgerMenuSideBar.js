import React from 'react';

const BurgerMenuSideBar = ({ setSidebarOpen }) => {
  return (
    <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
      <button
        onClick={() => setSidebarOpen(true)}
        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
        aria-label="Open sidebar"
      >
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default BurgerMenuSideBar;
