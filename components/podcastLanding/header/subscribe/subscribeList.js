import React, { useState } from 'react';
import SubscribeModal from './modal';
import SubscribeIconMobile from '../../../icons/directories/subscribeMobile';
import ApplePodcastIcon from '../../../icons/directories/applePodcastIcon';
import GooglePodcastIcon from '../../../icons/directories/googlePodcastIcon';
import SpotifyIcon from '../../../icons/directories/spotifyIcon';
import RssIcon from '../../../icons/directories/rssIcon';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
`;

const SubscribeList = ({ directoriesList, rss }) => {
  const [directories] = useState(
    directoriesList === null ? {} : directoriesList
  );
  const width = 'w-8';
  const height = 'h-8';

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* ABOVE SM SIZE */}
      <ListContainer className="hidden px-8 rounded shadow-inner sm:inline-block sm:px-4 sm:px-2">
        <p className="pt-2 text-center text-white md:hidden">Listen on</p>
        <div className="py-6 space-y-6 text-gray-100 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:grid-cols-4 sm:py-4 md:flex sm:justify-around">
          {directories['apple_podcasts'] && (
            <div className="transform md:px-4 hover:scale-105">
              <a
                href={directories['apple_podcasts']}
                target="_blank"
                className="flex items-center"
              >
                <ApplePodcastIcon width={width} height={height} />
                <div className="pl-2 text-xs leading-tight ">
                  <p className="">Apple</p>
                  <p>Podcasts</p>
                </div>
              </a>
            </div>
          )}
          {directories['google_podcasts'] && (
            <div className="transform md:px-4 hover:scale-105">
              <a
                href={directories['google_podcasts']}
                target="_blank"
                className="flex items-center"
              >
                <GooglePodcastIcon width={width} height={height} />
                <div className="pl-2 text-xs leading-tight">
                  <p>Google</p>
                  <p>Podcasts</p>
                </div>
              </a>
            </div>
          )}
          {directories['spotify'] && (
            <div className="transform md:px-4 hover:scale-105">
              <a
                href={directories['spotify']}
                target="_blank"
                className="flex items-center"
              >
                <SpotifyIcon width={width} height={height} />
                <span className="pl-2 text-xs leading-tight">Spotify</span>
              </a>
            </div>
          )}
          <div className="transform md:px-4 hover:scale-105">
            <a href={rss} target="_blank" className="flex items-center">
              <RssIcon width={width} height={height} />
              <span className="pl-2 text-xs leading-tight">Rss</span>
            </a>
          </div>
        </div>
      </ListContainer>

      {/* BELOW SM SIZE */}
      <div className="sm:hidden">
        <ListContainer
          className="flex items-center px-4 py-2 text-xs font-medium leading-tight text-white rounded cursor-pointer"
          onClick={() => setModalIsOpen(true)}
        >
          <SubscribeIconMobile />
          <p className="pl-1">Subscribe</p>
        </ListContainer>
        <SubscribeModal
          isOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          directories={directories}
          rss={rss}
        />
      </div>
    </>
  );
};

export default SubscribeList;
