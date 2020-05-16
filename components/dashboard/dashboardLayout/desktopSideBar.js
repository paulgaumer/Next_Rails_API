import React, { useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Router, { useRouter } from 'next/router';
import cookie from 'js-cookie';

const DesktopSideBar = ({ podcastSubdomain, currentDomain }) => {
  const router = useRouter();
  const [currentPath] = useState(router.pathname);

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
              src="/podwii-logo-white.png"
              alt="Podwii"
            />
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="flex-1 px-2 mt-5 bg-indigo-800">
            <Link href="/dashboard">
              <a
                className={`${
                  currentPath === '/dashboard'
                    ? 'text-white bg-indigo-900'
                    : 'mt-1 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:text-white'
                } group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150`}
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
            </Link>
            <Link href="/dashboard/podcast">
              <a
                className={`${
                  currentPath === '/dashboard/podcast'
                    ? 'text-white bg-indigo-900'
                    : 'mt-1 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:text-white'
                } group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150`}
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
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
                Podcast Info
              </a>
            </Link>
            <Link href="/dashboard/crm">
              <a
                className={`${
                  currentPath === '/dashboard/crm'
                    ? 'text-white bg-indigo-900'
                    : 'mt-1 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:text-white'
                } group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150`}
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
            </Link>

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
        <div className="px-2 py-4">
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
            Log Out
          </a>
        </div>
        <div className="px-2 py-1 border-t border-indigo-700">
          <Link href="/dashboard/support">
            <a
              className={`${
                currentPath === '/dashboard/support'
                  ? 'text-white bg-indigo-900'
                  : 'mt-1 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:text-white'
              } group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150`}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
              >
                <path
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              Support
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopSideBar;
