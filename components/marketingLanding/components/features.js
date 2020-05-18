import React from 'react';
// import jlsHome from '../../../public/marketing/jls-homepage.png';
// import dashboard from '../../../public/marketing/dashboard2.png';

const Features = () => {
  return (
    <div id="features" className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-600 font-title sm:text-4xl sm:leading-10">
            Grow your audience faster
          </h3>
          <p className="max-w-3xl mx-auto mt-4 text-xl leading-7 text-center text-gray-500">
            With hundreds of new podcasts released every day, it is increasingly
            difficult to find your audience. Don't rely on audio only,
            transcribing your content extends your reach and helps you build
            your acquisition strategy.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-800 font-title sm:text-3xl sm:leading-9">
              Optimized for podcasting
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Made by podcasters, for podcasters. We understand the challenges
              in creating high value content and created a set of tools to
              generate your website in one click, transcribe your episodes and
              connect with your listeners.
            </p>

            <ul className="mt-10">
              <li>
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        class="w-6 h-6 "
                      >
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-title">
                      Engage with your audience
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Create a call-to-action on your page and encourage
                      listeners to sign up for your newsletter or download your
                      ebook. Start building your mailing list and connect with
                      ConvertKit or Google Analytics to better engage with your
                      audience.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-title">
                      Generate transcripts instantly
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Search engine optimization is not an option. Podwii
                      transcribes your episodes and automatically includes them
                      in blog articles, giving you a massive boost in terms of
                      discoverability and referencing.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-title">
                      Use your own domain name
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Podwii gives you the opportunity to strenghten your brand
                      and use your own domain name. Sharing your podcast online
                      has never been easier.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative mx-2 mt-10 md:-mx-4 lg:mt-0">
            <svg
              className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto rounded shadow"
              width="490"
              src="/marketing/jls-homepage.png"
              alt=""
            />
          </div>
        </div>

        <svg
          className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-20 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-800 font-title sm:text-3xl sm:leading-9">
                You are in control
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Podwii automatically imports your new episodes and gives you
                access to a range of options via a dedicated dashboard. Decide
                what to publish, edit your content and setup your social sharing
                process.
              </p>

              <ul className="mt-10">
                <li>
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
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
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900 font-title">
                        Fine Tune your SEO strategy
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Edit your episodes through our blogging interface. Add
                        your show notes, transcripts, backlinks and keywords to
                        improve your SEO ranking.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white transition transform bg-indigo-500 rounded-md group-hover:scale-105">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          class="w-6 h-6"
                        >
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900 font-title">
                        Share on your social networks
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Podwii generates cards and taglines optimized for social
                        media. Share your content on Facebook, Twitter and
                        Instagram in seconds.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative mx-2 mt-10 md:-mx-4 lg:mt-0 lg:col-start-1">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto rounded shadow"
                width="490"
                src="/marketing/dashboard2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
