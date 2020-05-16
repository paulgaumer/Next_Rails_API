import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';

const updateRss = async (rss) => {
  const token = Cookies.get('token');
  const apiUrl = process.env.API_HOST;
  const res = await fetch(`${apiUrl}api/v1/dashboard/edit`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      podcast: { feed_url: rss },
    }),
  });
  if (res.status === 200) {
    Router.push('/dashboard');
  } else {
    alert(res.errors);
  }
};

const onboarding = () => {
  const [rss, setRss] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRss(rss);
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            One more thing (2/2)
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block pb-4 text-base font-medium leading-5 text-center text-gray-700"
                >
                  <p className="pb-2">What's your RSS feed url?</p>
                  <p className="text-sm text-gray-500">
                    (Podwii needs it to generate your website)
                  </p>
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    required
                    id="rss"
                    type="text"
                    value={rss}
                    placeholder="https://feeds.buzzsprout.com/740042.rss"
                    onChange={(e) => setRss(e.target.value)}
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Save & visit my dashboard
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default onboarding;
