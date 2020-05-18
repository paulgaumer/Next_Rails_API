import React from 'react';

const footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0">
          <p className="text-base leading-6 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Podwii. All rights reserved.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-base leading-6 text-center text-gray-400">
            contact@podwii.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
