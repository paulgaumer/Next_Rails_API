import React from 'react';

const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + '\u2026';
};

const Episode = ({ ep, cover }) => {
  return (
    <div className="relative mx-20 mb-10 bg-gray-800 shadow">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-2/6">
        <img
          className="object-cover w-full h-full"
          src={cover}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-4">
        <div className="md:ml-auto md:w-4/6 md:pl-10">
          <h2 className="mt-2 text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-xl sm:leading-10">
            {ep.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-300">
            {truncateText(ep.contentSnippet, 290)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Episode;
