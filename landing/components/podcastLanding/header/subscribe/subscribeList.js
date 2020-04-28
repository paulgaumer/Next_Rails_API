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
    <ListContainer className="inline-block px-4 rounded shadow-inner">
      {/* <h3 className="text-lg font-light text-center">Subscribe</h3> */}
      <div className="flex justify-center py-4">
        <div className="flex items-center pr-4">
          <ApplePodcastIcon width={width} height={height} />
          <div className="pl-2 text-xs font-thin leading-tight">
            <p>Apple</p>
            <p>Podcasts</p>
          </div>
        </div>
        <div className="flex items-center px-4">
          <GooglePodcastIcon width={width} height={height} />
          <div className="pl-2 text-xs font-thin leading-tight">
            <p>Google</p>
            <p>Podcasts</p>
          </div>
        </div>
        <div className="flex items-center px-4">
          <SpotifyIcon width={width} height={height} />
          <span className="pl-2 text-xs font-thin leading-tight">Spotify</span>
        </div>
        <div className="flex items-center pl-4">
          <RssIcon width={width} height={height} />
          <span className="pl-2 text-xs font-thin leading-tight">Rss</span>
        </div>
      </div>
    </ListContainer>
  );
};

export default SubscribeList;
