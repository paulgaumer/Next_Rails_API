import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../../../utils/formatDate';
import SubscribeList from './subscribe/subscribeList';

const HeaderContainer = styled.header`
  background: #06beb6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #68c7cd, #7fddd9);
  background: linear-gradient(to right, #68c7cd, #7fddd9);
`;

const HeroImage = styled.div`
  position: relative;
  width: 18rem;

  img {
    width: 100%;
    border-radius: 0.375rem;
    position: relative;
    z-index: 4;
  }
  div[data-name='cover-2'] {
    position: absolute;
    width: 22rem;
    height: 22rem;
    background-color: white;
    opacity: 0.2;
    border-radius: 50%;
    top: -2rem;
    right: -2rem;
    z-index: 3;
  }
  div[data-name='cover-3'] {
    position: absolute;
    width: 23rem;
    height: 23rem;
    background-color: white;
    opacity: 0.15;
    border-radius: 50%;
    top: -2.5rem;
    right: -40%;
    z-index: 2;
  }
  div[data-name='cover-4'] {
    position: absolute;
    width: 25rem;
    height: 25rem;
    background-color: white;
    opacity: 0.1;
    border-radius: 50%;
    top: -3.5rem;
    right: -70%;
    z-index: 1;
  }
`;

const NewHeader = ({ data }) => {
  return (
    <HeaderContainer>
      <div className="py-20 mx-auto max-w-7xl">
        <div
          data-name="top-part"
          className="grid grid-cols-12 gap-20 mx-20 xl:gap-28"
        >
          <div className="col-span-7">
            <h1 className="pb-12 text-6xl text-white xl:text-7xl font-titleLanding">
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
            <HeroImage className="">
              <img
                src={data.cover_image.url}
                alt={data.cover_image.title}
                className="shadow-md"
              />
              <div data-name="cover-2"></div>
              <div data-name="cover-3"></div>
              <div data-name="cover-4"></div>
            </HeroImage>
          </div>
        </div>
        <div data-name="bottom-part" className="flex items-center mx-20">
          <SubscribeList />
          <div className="pl-10">
            <span className="inline-flex flex-shrink-0 rounded-md">
              <button
                type="button"
                className="inline-flex items-center px-4 py-3 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-white border border-transparent rounded-full bg-opacity-25 hover:bg-opacity-50 focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white active:bg-opacity-50"
              >
                <span className="flex">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="pl-2">Support the show</span>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default NewHeader;
