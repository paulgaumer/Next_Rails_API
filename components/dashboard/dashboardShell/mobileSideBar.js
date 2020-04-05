import React from 'react';

const MobileSideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`${sidebarOpen ? 'block' : 'hidden'} md:hidden`}>
      <div
        onClick={() => setSidebarOpen(false)}
        data-todo-x-show="sidebarOpen"
        data-todo-x-transition-enter-start="opacity-0"
        data-todo-x-transition-enter-end="opacity-100"
        data-todo-x-transition-leave-start="opacity-100"
        data-todo-x-transition-leave-end="opacity-0"
        className="fixed inset-0 z-30 transition-opacity duration-300 ease-linear"
      >
        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      <div className="fixed inset-0 z-40 flex">
        <div
          data-todo-x-show="sidebarOpen"
          data-todo-x-transition-enter-start="-translate-x-full"
          data-todo-x-transition-enter-end="translate-x-0"
          data-todo-x-transition-leave-start="translate-x-0"
          data-todo-x-transition-leave-end="-translate-x-full"
          className="flex flex-col flex-1 w-full max-w-xs duration-300 ease-in-out transform bg-indigo-800 "
        >
          <div
            className="absolute top-0 right-0 p-1 -mr-14"
            key="transition-group-content"
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className={`${
                sidebarOpen ? 'block' : 'hidden'
              } flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600`}
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-on-brand.svg"
                alt="Workflow"
              />
            </div>
            <nav className="px-2 mt-5">
              <a
                href="/"
                className="flex items-center px-2 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700"
              >
                <svg
                  className="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  />
                </svg>
                Dashboard
              </a>
              <a
                href="/"
                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
              >
                <svg
                  className="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Team
              </a>
              <a
                href="/"
                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
              >
                <svg
                  className="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Projects
              </a>
              <a
                href="/"
                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
              >
                <svg
                  className="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Calendar
              </a>
              <a
                href="/"
                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
              >
                <svg
                  className="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                Documents
              </a>
              <a
                href="/"
                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
              >
                <svg
                  className="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Reports
              </a>
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4 border-t border-indigo-700">
            <a
              href="/"
              className="flex-shrink-0 block group focus:outline-none"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium leading-6 text-white">
                    Tom Cook
                  </p>
                  <p className="text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out group-hover:text-indigo-100 group-focus:underline">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-14">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
