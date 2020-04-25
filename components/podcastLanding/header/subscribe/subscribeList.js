import React from 'react';
import ApplePodcastIcon from './applePodcastIcon';
import GooglePodcastIcon from './googlePodcastIcon';
import SpotifyIcon from './spotifyIcon';
import RssIcon from './rssIcon';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: rgba(38, 38, 38, 0.25);
`;

const SubscribeList = () => {
  const width = 'w-8';
  const height = 'w-8';

  return (
    <ListContainer className="inline-block px-4 mt-12 rounded shadow-inner">
      {/* <h3 className="text-lg font-light text-center">Subscribe</h3> */}
      <div className="flex justify-center py-4">
        <div className="pr-3">
          <ApplePodcastIcon width={width} height={height} />
        </div>
        <div className="px-3">
          <GooglePodcastIcon width={width} height={height} />
        </div>
        <div className="px-3">
          <SpotifyIcon width={width} height={height} />
        </div>
        <div className="pl-3">
          <RssIcon width={width} height={height} />
        </div>
      </div>
    </ListContainer>
  );
};

export default SubscribeList;
