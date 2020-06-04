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
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-600 font-titleMarketing sm:text-4xl sm:leading-10">
            Grow your audience faster
          </h3>
          <p className="max-w-3xl mx-auto mt-6 text-xl leading-7 text-center text-gray-500">
            Reaching your audience is increasingly difficult. Don't rely on
            audio only!
          </p>
          <p className="max-w-3xl mx-auto mt-2 text-xl leading-7 text-center text-gray-500">
            Boost your acquisition strategy by transcribing and enriching your
            content.
          </p>
        </div>

        <div className="relative mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-800 font-titleMarketing sm:text-3xl sm:leading-9">
              Optimized for podcasting
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Made by podcasters, for podcasters. We understand the challenges
              in creating high value content and created a set of tools to
              better engage with your audience.
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
                        className="w-6 h-6 "
                      >
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                      Start building your mailing list
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Display fields to easily sign up for your newsletter or
                      download your ebook and start building your mailing list.
                      Link to{' '}
                      <a
                        href="https://mailchimp.com/"
                        target="_blank"
                        className="font-semibold text-indigo-500 hover:underline"
                      >
                        Mailchimp
                      </a>
                      ,{' '}
                      <a
                        href="https://convertkit.com/"
                        target="_blank"
                        className="font-semibold text-indigo-500 hover:underline"
                      >
                        ConvertKit
                      </a>{' '}
                      or download it as csv.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                      Receive financial support
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Get rewarded for your hard work! Add a link to your
                      patreon or other donation plateform to start receiving
                      support from your audience.
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
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
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
              width="550"
              src="/marketing/homepage2.png"
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

        <div className="relative mt-24 lg:mt-40">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className=" lg:col-start-2">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-800 font-titleMarketing sm:text-3xl sm:leading-9">
                Enrich your content
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Podwii automatically imports your new episodes and gives you
                access to a wide range of options via a dedicated dashboard. Do
                more in less time!
              </p>

              <ul className="mt-10">
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
                      <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                        Transcribe in one-click
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Search engine optimization is not an option. Podwii uses
                        AI to transcribe your episodes on demand, giving you a
                        massive boost in terms of discoverability and
                        referencing.
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
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 ">
                      <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                        Fine Tune your SEO strategy
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Edit your episodes and podcast details through our
                        blogging interface. Enrich your show notes and
                        transcripts with videos, images and links to better
                        match your keywords. Who said show notes had to be
                        boring?
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
                          strokeLinecap="round"
                          strokeLWnejoin="round"
                          stroke-Width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                        Create Headliner Audiograms
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        We partnered with{' '}
                        <a
                          href="https://www.headliner.app/"
                          target="_blank"
                          className="font-semibold text-indigo-500 hover:underline"
                        >
                          Headliner
                        </a>{' '}
                        to let you access the service you love, straight from
                        your Podwii dashboard. Oh, sweet sweet audiograms!
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
                width="550"
                src="/marketing/dashboard.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-24 lg:mt-40 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-800 font-titleMarketing sm:text-3xl sm:leading-9">
              Embed your Instagram feed
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Instagram is often a must-have for your communication strategy.
              Creators spend a lot of time perfecting their feeds, and visitors
              love to see them!
            </p>

            <ul className="mt-10">
              <li>
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 "
                      >
                        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                      Display your Instagram content
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      What a better way to encourage visitors to follow you than
                      offering a preview of your content! The perfect
                      opportunity to boost your followers and animate your page.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white transform bg-indigo-500 rounded-md group-hover:scale-105">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900 font-titleMarketing">
                      More networks are coming
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Twitter and others are on our shortlist.{' '}
                      <a
                        href="mailto:contact@podwii.com"
                        className="font-semibold text-indigo-500 hover:underline"
                      >
                        Let us know
                      </a>{' '}
                      which network you'd love us to integrate to Podwii.
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
              width="550"
              src="/marketing/ugp.gif"
              alt="ugpcast.podwii.com"
            />
            <p className="pt-2 text-xs text-center text-gray-500 ">
              <a
                href="https://ugpcast.podwii.com"
                target="_blank"
                className="hover:underline"
              >
                - ugpcast.podwii.com -
              </a>
            </p>
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
      </div>
    </div>
  );
};

export default Features;
