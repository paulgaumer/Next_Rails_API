import React from 'react';
import Link from 'next/link';

const DesktopSideBar = ({ podcastSubdomain, currentDomain }) => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-indigo-800 border-r border-gray-200">
        <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-logo-on-brand.svg"
              alt="Workflow"
            />
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="flex-1 px-2 mt-5 bg-indigo-800">
            <a
              href="/"
              className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-focus:text-indigo-300"
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
              className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
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
              className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
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
              className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
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
              className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
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
              className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
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
            <div className="mt-2 border-t border-indigo-700">
              <Link href={`http://${podcastSubdomain}.${currentDomain}`}>
                <a
                  target="_blank"
                  className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Visit your page
                </a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-shrink-0 p-4 border-t border-indigo-700">
          <a href="/" className="flex-shrink-0 block w-full group">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block rounded-full h-9 w-9"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium leading-5 text-white">
                  Tom Cook
                </p>
                <p className="text-xs font-medium leading-4 text-indigo-300 transition duration-150 ease-in-out group-hover:text-indigo-100">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopSideBar;
