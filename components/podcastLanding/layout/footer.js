import React, { useState } from 'react';
import FacebookIcon from '../../icons/social/FacebookIcon';
import InstagramIcon from '../../icons/social/InstagramIcon';
import TwitterIcon from '../../icons/social/TwitterIcon';

const Footer = ({ socialsList }) => {
  const [socials] = useState(socialsList ? socialsList : {});
  const width = 'w-6';
  const height = 'h-6';
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          {socials['facebook'] && (
            <a
              href={`${socials['facebook']}`}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon width={width} height={height} />
            </a>
          )}
          {socials['instagram'] && (
            <a
              href={`${socials['instagram']}`}
              target="_blank"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon width={width} height={height} />
            </a>
          )}
          {socials['twitter'] && (
            <a
              href={`${socials['twitter']}`}
              target="_blank"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon width={width} height={height} />
            </a>
          )}
        </div>
        <div className="flex items-center mt-8 md:mt-0 md:order-1">
          <p className="text-base leading-6 text-center text-gray-400">
            Proudly powered by{' '}
            <a href="https://podwii.com" target="_blank" className="underline">
              Podwii
            </a>
          </p>
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-1 text-red-300"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
