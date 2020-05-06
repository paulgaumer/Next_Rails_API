import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import cookie from 'js-cookie';

const DesktopSideBar = ({ podcastSubdomain, currentDomain }) => {
  const handleLogOut = (e) => {
    const token = cookie.get('token');
    const apiUrl = process.env.API_HOST;

    e.preventDefault();
    fetch(`${apiUrl}users/sign_out`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    });
    cookie.remove('token');
    Router.push('/signin');
  };

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
            <Link href="/dashboard">
              <a className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700">
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
            </Link>
            <Link href="/dashboard/podcast">
              <a className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                >
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
                Podcast Details
              </a>
            </Link>
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
              CRM
            </a>

            <div className="mt-2 border-t border-indigo-700">
              <a
                href={`http://${podcastSubdomain}.${currentDomain}`}
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
                  className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Visit your page
              </a>
            </div>
          </nav>
        </div>
        <div className="p-4 border-t border-indigo-700 ">
          <a
            onClick={handleLogOut}
            className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md cursor-pointer group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
            >
              <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            LOG OUT
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopSideBar;
