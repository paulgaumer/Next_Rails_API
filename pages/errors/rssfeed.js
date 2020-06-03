import React from 'react';

const FeedErrors = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <img
        src="/marketing/podwii-red.png"
        alt="podwii logo"
        className="pb-6 mb-20 border-b-4 border-red-400 opacity-75"
      />
      <h2 className="mb-12 text-2xl font-bold text-gray-600">
        🧐 Oops! Something went wrong with your rss feed
      </h2>
      <p className="mb-8">
        The rss feed url you entered seems to be invalid, or doesn't reference
        any podcast episodes.
      </p>
      <p className="mb-8">
        Please contact support at{' '}
        <a
          href="mailto:contact@podwii.com"
          className="font-bold text-blue-500 hover:underline"
        >
          contact@podwii.com
        </a>{' '}
        to resolve this issue.
      </p>
    </div>
  );
};

export default FeedErrors;
