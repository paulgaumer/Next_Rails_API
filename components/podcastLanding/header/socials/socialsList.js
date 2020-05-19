import React, { useState } from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../../icons/social/FacebookIcon';
import TwitterIcon from '../../../icons/social/TwitterIcon';
import InstagramIcon from '../../../icons/social/InstagramIcon';

const SocialsList = ({ socialsList }) => {
  const width = 'w-8';
  const height = 'h-8';
  return (
    <>
      <div className="flex items-center space-x-5 text-white">
        {socialsList['facebook'] && (
          <div className="transform hover:scale-105">
            <a
              href={socialsList['facebook']}
              target="_blank"
              className="flex items-center"
            >
              <FacebookIcon width={width} height={height} />
            </a>
          </div>
        )}
        {socialsList['twitter'] && (
          <div className="transform hover:scale-105">
            <a
              href={socialsList['twitter']}
              target="_blank"
              className="flex items-center"
            >
              <TwitterIcon width={width} height={height} />
            </a>
          </div>
        )}
        {socialsList['instagram'] && (
          <div className="transform hover:scale-105">
            <a
              href={socialsList['instagram']}
              target="_blank"
              className="flex items-center"
            >
              <InstagramIcon width={width} height={height} />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default SocialsList;
