import React, { useState } from 'react';
import Link from 'next/link';
import { submitAccessForm } from '../utils/handleForm';
// import scene from '../../../public/marketing/scene.svg';
// import podwiiWhite from '../../../public/marketing/podwii-white.png';
// import podwiiRed from '../../../public/marketing/podwii-red.png';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [honeyBot, setHoneyBot] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeyBot === '') {
      const res = await submitAccessForm(email);
      if (res.status === 200) {
        setFormSubmitted(true);
        setEmail('');
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white gradient-mktg">
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <svg
          className="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2"
          width="640"
          height="784"
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x="118"
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
          {/* <rect
            y="72"
            width="640"
            height="640"
            className="text-gray-50"
            fill="currentColor"
          /> */}
          <rect
            x="118"
            width="404"
            height="784"
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>
      <div
        data-todo-x-data="{ open: false }"
        // className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32"
        className="relative pt-6"
      >
        {/* DESKTOP NAV */}
        <nav className="relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img
                  className="w-auto h-8 sm:h-10"
                  src="/marketing/podwii-white.png"
                  alt="podwii"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  data-todo-at-click="open = true"
                  onClick={() => setIsOpen(true)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden font-titleMarketing md:block md:ml-10">
              <a
                href="#features"
                className="inline-block pb-1 font-medium text-gray-100 transform hover:border-purple-500 hover:border-b-2 focus:outline-none focus:text-white hover:scale-105"
              >
                Features
              </a>
              <a
                href="#integration"
                className="inline-block pb-1 ml-10 font-medium text-gray-100 transform focus:outline-none focus:text-white hover:border-purple-500 hover:border-b-2 hover:scale-105"
              >
                Integration
              </a>
              <a
                href="#access"
                className="inline-block pb-1 ml-10 font-medium text-gray-100 transform focus:outline-none focus:white hover:border-purple-500 hover:border-b-2 hover:scale-105"
              >
                Early Access
              </a>
              <Link href="/signin">
                <a className="inline-block pb-1 ml-10 font-medium text-gray-100 transform focus:outline-none focus:white hover:border-purple-500 hover:border-b-2 hover:scale-105">
                  Log In
                </a>
              </Link>
            </div>
            <div></div>
          </div>
        </nav>
        {/* END DESKTOP NAV */}

        {/* MOBILE MENU */}
        <div
          className={`absolute inset-x-0 top-0 ${
            isOpen ? 'block' : 'hidden'
          } p-2 md:hidden`}
        >
          <div
            // data-todo-x-show="open"
            // data-todo-x-transition-enter="duration-150 ease-out"
            // data-todo-x-transition-enter-start="opacity-0 scale-95"
            // data-todo-x-transition-enter-end="opacity-100 scale-100"
            // data-todo-x-transition-leave="duration-100 ease-in"
            // data-todo-x-transition-leave-start="opacity-100 scale-100"
            // data-todo-x-transition-leave-end="opacity-0 scale-95"
            className="transition origin-top-right transform rounded-lg shadow-md"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-xs">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="/marketing/podwii-red.png"
                    alt="podwii"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    data-todo-at-click="open = false"
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 font-titleMarketing">
                <a
                  href="#features"
                  className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#integration"
                  className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >
                  Integration
                </a>
                <a
                  href="#access"
                  className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >
                  Early Access
                </a>
                <Link href="/signin">
                  <a className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
                    Log In
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* END MOBILE MENU */}

        <div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="mb-16 lg:mb-0 sm:text-center md:max-w-2xl md:mx-auto lg:mx-0 lg:col-span-6 lg:text-left">
              {/* <div className="text-sm font-semibold tracking-wide text-red-200 uppercase sm:text-base lg:text-sm xl:text-base">
                Early Access
              </div> */}
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight font-titleMarketing text-cool-gray-100 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                Give {/* <br className="hidden md:inline" /> */}
                <span className="text-purple-600">superpowers</span> to your
                podcast
              </h1>
              <h2 className="mt-10 text-xl text-white sm:text-2xl">
                Transcribe and turn your podcast into a blog,{' '}
                <span className="border-b-2 border-white">in one click</span>.
              </h2>
              <p className="mt-8 text-base text-gray-100 sm:text-xl lg:text-lg xl:text-xl">
                Your time should be spent on creating high-value content for
                your show. Podwii takes care of the rest.
              </p>
              <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-red-100">
                  Get early access to our private release.
                </p>
                <form
                  name="contact-top"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-3 sm:flex"
                >
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human:{' '}
                      <input
                        name="bot-field"
                        value={honeyBot}
                        onChange={(e) => setHoneyBot(e.target.value)}
                      />
                    </label>
                  </p>
                  <input
                    required
                    id="email-top"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-3 py-3 text-base leading-6 placeholder-gray-500 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 sm:flex-1"
                  />
                  <button
                    type="submit"
                    className={`w-full px-6 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm focus:outline-none focus:shadow-outline active:bg-purple-900 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto ${
                      formSubmitted
                        ? 'bg-teal-400'
                        : 'bg-purple-600 hover:bg-purple-500'
                    }`}
                  >
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 mr-1 ${
                        formSubmitted ? 'block' : 'hidden'
                      }`}
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>
                      {formSubmitted ? 'Check your inbox' : 'Request Access'}
                    </span>
                  </button>
                </form>
                {/* <p className="mt-3 text-sm leading-5 text-gray-500">
                  We care about the protection of your data. Read our{" "}
                  <a href="/" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </a>
                  .
                </p> */}
              </div>
            </div>
            <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-2 lg:max-w-none lg:mx-0 lg:col-span-6">
              <svg
                className="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
                width="640"
                height="784"
                fill="none"
                viewBox="0 0 640 784"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x="118"
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
                  y="72"
                  width="640"
                  height="640"
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x="118"
                  width="404"
                  height="784"
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md">
                <img src="/marketing/scene.svg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="relative -mt-12 lg:-mt-24"> */}
        <div className="relative">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#F9FAFB"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
