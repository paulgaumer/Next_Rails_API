import React from 'react';
import Link from 'next/link';
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

const EpisodeCard = ({ ep }) => {
  return (
    <Link href="/episodes/[id]" as={`/episodes/${ep.guid}`}>
      <a>
        <div className="flex mb-10">
          <CardImage
            className="relative flex-shrink-0 w-40 h-40"
            data-name="card-image"
          >
            <img
              className="absolute inset-0 object-cover w-full h-full rounded shadow"
              data-name="image-one"
              src={ep.cover_image.url}
              alt={ep.title}
            />
            <img
              className="absolute object-cover rounded shadow"
              data-name="image-two"
              src={ep.cover_image.url}
              alt={ep.title}
            />
            <img
              className="absolute object-cover rounded shadow"
              data-name="image-three"
              src={ep.cover_image.url}
              alt={ep.title}
            />
          </CardImage>
          <div className="self-center pl-6" data-name="card-content">
            <h3 className="text-xl font-semibold ">{ep.title}</h3>
            <div className="flex items-center mt-3">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="text-red-400"
                >
                  <path
                    fill="currentColor"
                    d="M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0zm101.771 264.969l-149.333 96a10.62 10.62 0 01-5.771 1.698c-1.75 0-3.521-.438-5.104-1.302A10.653 10.653 0 01192 352V160c0-3.906 2.125-7.49 5.563-9.365 3.375-1.854 7.604-1.74 10.875.396l149.333 96c3.042 1.958 4.896 5.344 4.896 8.969s-1.854 7.01-4.896 8.969z"
                  />
                </svg>
              </div>
              <p className="pl-4 text-base leading-tight leading-7 text-gray-900">
                {truncateText(ep.summary, 290)}
              </p>
            </div>
            <div className="pt-3 text-sm text-gray-400">
              <p>61 min | March 19, 2020</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default EpisodeCard;
