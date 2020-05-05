import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../../../utils/formatDate';

const HeaderContainer = styled.header`
  background: #06beb6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #68c7cd,
    #7fddd9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #68c7cd,
    #7fddd9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const NewHeader = ({ data }) => {
  return (
    <HeaderContainer>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-20 py-20 mx-20">
          <div className="col-span-7">
            <h1 className="pb-12 text-6xl text-white font-titleLanding">
              Japan Life Stories
            </h1>
            <div className="flex items-center">
              <span className="inline-flex flex-shrink-0 rounded-md">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-3 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent rounded-full hover:bg-red-500 focus:outline-none focus:border-red-500 focus:shadow-outline-red active:bg-red-500"
                >
                  <svg
                    x="0px"
                    y="0px"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 320.001 320.001"
                    style={{ enableBackground: 'new 0 0 320.001 320.001' }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
	c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
	c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  <span className="pl-2">PLAY LATEST</span>
                </button>
              </span>
              <div className="pl-4 text-white">
                <p>{data.episodes[0].title}</p>
                <p className="text-sm font-light">
                  - {formatDate(data.episodes[0].enclosure.pubDate)}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="relative w-48">
              <img
                src={data.cover_image.url}
                className="relative w-full rounded-md"
                alt={data.cover_image.title}
                style={{ zIndex: '3' }}
              />
              <div
                className="absolute w-48 h-48 bg-white opacity-50"
                style={{ top: '-5px', right: '-5px', zIndex: '2' }}
              ></div>
              <div
                className="absolute w-48 h-48 bg-white opacity-25"
                style={{ top: '-10px', right: '-10px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default NewHeader;
