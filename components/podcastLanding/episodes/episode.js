import React from 'react';
import styled from 'styled-components';

const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + '\u2026';
};

const CardImage = styled.div`
  img[data-name='image-two'] {
    width: 140px;
    height: 140px;
    left: 0;
    right: 0;
    bottom: -8px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.5;
    z-index: -1;
  }
  img[data-name='image-three'] {
    width: 120px;
    height: 120px;
    left: 0;
    right: 0;
    bottom: -16px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.3;
    z-index: -2;
  }
`;

const Episode = ({ ep }) => {
  return (
    <div className="flex mb-10">
      <CardImage
        className="relative flex-shrink-0 w-40 h-40"
        data-name="card-image"
      >
        <img
          className="absolute inset-0 object-cover w-full h-full rounded shadow"
          data-name="image-one"
          src={ep.podcastCover.url}
          alt={ep.title}
        />
        <img
          className="absolute object-cover rounded"
          data-name="image-two"
          src={ep.podcastCover.url}
          alt={ep.title}
        />
        <img
          className="absolute object-cover rounded"
          data-name="image-three"
          src={ep.podcastCover.url}
          alt={ep.title}
        />
      </CardImage>
      <div className="self-center pl-6" data-name="card-content">
        <h3 className="text-xl font-semibold ">{ep.title}</h3>
        <div className="flex items-center mt-3">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-red-400 rounded-full">
            <svg viewBox="0 0 320.001 320.001" className="pl-2 text-white w-8 h-8" fill="currentColor" stroke="currentColor">
              <path d="M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"/>
            </svg>
          </div>
          <p className="pl-4 text-base leading-tight leading-7 text-gray-900">
            {truncateText(ep.description, 290)}
          </p>
        </div>
        <div className="pt-3 text-sm text-gray-400">
          <p>61 min | March 19, 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Episode;
