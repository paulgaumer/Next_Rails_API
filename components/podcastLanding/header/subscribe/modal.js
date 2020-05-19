import React, { useState } from 'react';
import Modal from 'react-modal';
import ApplePodcastIcon from '../../../icons/directories/applePodcastIcon';
import GooglePodcastIcon from '../../../icons/directories/googlePodcastIcon';
import SpotifyIcon from '../../../icons/directories/spotifyIcon';
import RssIcon from '../../../icons/directories/rssIcon';

const customStyles = {
  overlay: {
    zIndex: '10',
    backgroundColor: 'rgba(100, 100, 100, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
};

const SubscribeModal = ({ isOpen, setModalIsOpen, directories, rss }) => {
  const width = 'w-8';
  const height = 'w-8';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(false)}
      // onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="">
        <p className="flex items-center justify-center pt-2 font-bold text-center text-gray-800 uppercase">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2 text-red-400"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          <span>Listen on</span>
        </p>
        <div className="grid grid-cols-2 row-gap-12 pt-10 pb-2 text-gray-700 col-gap-14">
          {directories['apple_podcasts'] && (
            <div className="transform hover:scale-105">
              <a
                href={directories['apple_podcasts']}
                target="_blank"
                className="flex items-center"
              >
                <img src="/apple_podcast_icon.png" alt="" className="w-8 h-8" />
                <div className="pl-2 text-xs leading-tight ">
                  <p className="">Apple</p>
                  <p>Podcasts</p>
                </div>
              </a>
            </div>
          )}
          {directories['google_podcasts'] && (
            <div className="transform hover:scale-105">
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
            <div className="transform hover:scale-105">
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
          <div className="transform hover:scale-105">
            <a href={rss} target="_blank" className="flex items-center">
              <RssIcon width={width} height={height} />
              <span className="pl-2 text-xs leading-tight">Rss</span>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
