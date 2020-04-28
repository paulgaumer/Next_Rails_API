import React from 'react';

const Cta = () => {
  return (
    <div className="flex justify-center bg-gray-800">
      <div className="max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:flex lg:items-center">
        <div className="lg:flex-1">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-white altsm:text-2xl sm:leading-10">
            Join the community
          </h2>
          {/* <p className="max-w-3xl mt-3 text-sm leading-6 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p> */}
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <input
              aria-label="Email address"
              type="email"
              required
              className="w-full px-5 py-2 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded appearance-none focus:outline-none focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="flex items-center justify-center w-full px-5 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                Join now
              </button>
            </div>
          </form>
          {/* <p className="mt-3 text-sm leading-5 text-gray-300">
            We care about the protection of your data. Read our
            <a href="/" className="font-medium text-white underline">
              Privacy Policy.
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Cta;
