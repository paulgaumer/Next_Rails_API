import React, { useState } from 'react';
import { editPodcast } from '../apiCalls/handleFetch';

const IntegrationSection = ({ podcastData }) => {
  const { podcast } = podcastData;
  const socials = podcast.socials ? podcast.socials : {};
  const instaClientId = process.env.INSTAGRAM_CLIENT_ID;
  const instaOauthRedirect = process.env.INSTAGRAM_OAUTH_REDIRECT;
  const [isInstagramConnected, setIsInstagramConnected] = useState(
    podcast.instagram_access_token !== null
  );
  const [financialSupport, setFinancialSupport] = useState(
    podcast.financial_support ? podcast.financial_support : ''
  );
  const [facebookAppId, setFacebookAppId] = useState(
    podcast.facebook_app_id ? podcast.facebook_app_id : ''
  );

  // Social Profiles Links
  const [facebook, setFacebook] = useState(socials.facebook);
  const [twitter, setTwitter] = useState(socials.twitter);
  const [instagram, setInstagram] = useState(socials.instagram);

  const handleInstagramDisconnect = async (e) => {
    e.preventDefault();
    const updatedPodcast = {
      instagram_access_token: null,
    };
    const res = await editPodcast(updatedPodcast);
    res === 200 && setIsInstagramConnected(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPodcast = {
      financial_support: financialSupport !== '' ? financialSupport : null,
      facebook_app_id: facebookAppId !== '' ? facebookAppId : null,
      socials: {
        facebook: facebook ? facebook : null,
        twitter: twitter ? twitter : null,
        instagram: instagram ? instagram : null,
      },
    };
    // console.log(updatedPodcast);
    const res = await editPodcast(updatedPodcast);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="pt-8 mt-8 sm:mt-5 sm:pt-10">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                ⚡️ BRING SUPERPOWERS TO YOUR PODCAST
              </h3>
              <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
                Enhance your website with a selection of services from our
                partners
              </p>
            </div>
            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="instagram"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Instagram
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex items-center max-w-lg rounded-md sm:mt-2">
                  {!isInstagramConnected && (
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200"
                      >
                        <a
                          href={`https://api.instagram.com/oauth/authorize?client_id=${instaClientId}&redirect_uri=${instaOauthRedirect}&scope=user_profile,user_media&response_type=code`}
                          target="_blank"
                        >
                          Display Your Feed on Your Website Now
                        </a>
                      </button>
                    </span>
                  )}
                  {isInstagramConnected && (
                    <div className="flex items-end">
                      <div className="flex items-center justify-center px-2 text-green-500 border border-green-500 rounded opacity-75 sm:mt-px">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-1"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p className="text-sm leading-5 ">Connected</p>
                      </div>
                      <p className="ml-4 text-xs text-gray-700">
                        Your feed is now visible on your website
                      </p>
                      <button
                        className="ml-4 text-xs text-gray-500 underline"
                        onClick={handleInstagramDisconnect}
                      >
                        Disconnect
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Instagram Profile
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="instagram"
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="twitter"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Twitter Profile
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="twitter"
                      type="text"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="facebook"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Facebook Profile
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="facebook"
                      type="text"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="facebook_id"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Facebook App ID
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="facebook_id"
                      type="text"
                      value={facebookAppId}
                      onChange={(e) => setFacebookAppId(e.target.value)}
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="financial_support"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Support Link (Patreon...)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="financial_support"
                      value={financialSupport}
                      onChange={(e) => setFinancialSupport(e.target.value)}
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Headliner
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  {/* <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="last_name"
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div> */}
                  <p className="text-sm text-gray-800 sm:pt-2">
                    Already done! Start creating awesome audiograms from your
                    episodes pages
                  </p>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Mailchimp
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  {/* <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="last_name"
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div> */}
                  <p className="text-sm text-gray-800 sm:pt-2">
                    Coming soon...
                  </p>
                </div>
              </div>
              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  ConvertKit
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  {/* <div className="max-w-xs rounded-md shadow-sm">
                    <input
                      id="last_name"
                      className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    />
                  </div> */}
                  <p className="text-sm text-gray-800 sm:pt-2">
                    Coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 mt-8 border-t border-gray-200">
          <div className="flex justify-end">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              >
                Cancel
              </button>
            </span>
            <span className="inline-flex ml-3 rounded-md shadow-sm">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                Save
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IntegrationSection;
