import React from 'react';
import ApplePodcastIcon from './applePodcastIcon';
import GooglePodcastIcon from './googlePodcastIcon';
import SpotifyIcon from './spotifyIcon';
import RssIcon from './rssIcon';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
`;

const SubscribeList = () => {
  const width = 'w-8';
  const height = 'w-8';

  return (
    <>
      {/* ABOVE SM SIZE */}
      <ListContainer className="hidden px-8 rounded shadow-inner sm:inline-block sm:px-4 md:px-2">
        <p className="pt-2 text-center text-white md:hidden">Listen on</p>
        <div className="py-6 text-gray-100 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:grid-cols-3 md:py-4 md:flex md:justify-around">
          <div className="flex items-center md:px-4">
            <ApplePodcastIcon width={width} height={height} />
            <div className="pl-2 text-xs leading-tight ">
              <p className="">Apple</p>
              <p>Podcasts</p>
            </div>
          </div>
          <div className="flex items-center md:px-4">
            <GooglePodcastIcon width={width} height={height} />
            <div className="pl-2 text-xs leading-tight">
              <p>Google</p>
              <p>Podcasts</p>
            </div>
          </div>
          <div className="flex items-center md:px-4">
            <SpotifyIcon width={width} height={height} />
            <span className="pl-2 text-xs leading-tight">Spotify</span>
          </div>
          <div className="flex items-center md:px-4">
            <RssIcon width={width} height={height} />
            <span className="pl-2 text-xs leading-tight">Rss</span>
          </div>
        </div>
      </ListContainer>

      {/* BELOW SM SIZE */}
      <div className="sm:hidden">
        <div className="flex space-x-6">
          <ListContainer className="flex items-center px-4 py-2 text-white rounded shadow-inner">
            {/* <ApplePodcastIcon width="w-8" height="w-8" /> */}
            <div className="pl-2 text-xs leading-tight ">
              <p className="">Apple</p>
              <p>Podcasts</p>
            </div>
          </ListContainer>
          <ListContainer className="flex items-center px-4 py-2 text-white rounded shadow-inner">
            <div className="pl-2 text-xs leading-tight ">
              <p className="">More Options</p>
            </div>
          </ListContainer>
        </div>
      </div>
    </>
  );
};

export default SubscribeList;
