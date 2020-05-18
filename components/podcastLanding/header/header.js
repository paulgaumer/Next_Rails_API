import React, { useContext, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { formatDate } from '../../../utils/formatDate';
import SubscribeList from './subscribe/subscribeList';
import SupportButton from './support/SupportButton';

const HeaderContainer = styled.header`
  overflow: hidden;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  #header-play-button {
    button {
      border: 2px solid ${(props) => props.textColor};
    }
  }
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

  @media (max-width: 640px) {
    width: 12rem;

    div[data-name='cover-2'] {
      width: 14rem;
      height: 14rem;
      top: -1rem;
      right: -1rem;
    }
    div[data-name='cover-3'] {
      width: 16rem;
      height: 16rem;
      top: -2rem;
      right: -2rem;
    }
    div[data-name='cover-4'] {
      display: none;
    }
  }
`;

const NewHeader = ({ data, pageType }) => {
  const audioDispatch = useContext(GlobalDispatchContext);
  const { amplitude, theme, isThemed } = useContext(GlobalStateContext);
  const [headerText] = useState(data.theme.colors.headerText);
  const [headerBackground] = useState(data.theme.colors.headerBackground);
  const isEp = pageType === 'ep';

  const handlePlayClick = () => {
    audioDispatch({
      type: 'PLAY_EPISODE',
      payload: isEp ? data.episode : data.episodes[0],
    });
    amplitude.playSongAtIndex(0);
  };

  return (
    <HeaderContainer textColor={headerText} backgroundColor={headerBackground}>
      <div className="py-12 mx-auto max-w-7xl">
        <div
          data-name="top-part"
          className="flex flex-col-reverse items-center sm:mx-20 lg:grid lg:grid-cols-12 lg:gap-20 xl:gap-28"
        >
          <div className="col-span-7 mt-12 lg:mt-0">
            {isEp && (
              <h1 className="pb-8 text-3xl leading-none text-center sm:text-4xl md:text-4xl lg:pb-12 xl:text-5xl font-titleLanding lg:text-left">
                {data.episode.title}
              </h1>
            )}
            {!isEp && (
              <h1 className="pb-8 text-4xl font-bold leading-none text-center sm:text-5xl md:text-6xl lg:pb-12 xl:text-7xl font-titleLanding lg:text-left">
                {data.title}
              </h1>
            )}
            <div id="header-play-button" className="lg:flex lg:items-center">
              <span className="flex justify-center flex-shrink-0 rounded-md lg:inline-flex">
                <button
                  type="button"
                  className={`inline-flex items-center px-4 py-3 text-sm font-medium leading-6 transition duration-150 ease-in-out rounded-full md:px-6 md:py-4 lg:px-4 lg:py-3 focus:outline-none focus:border-red-500 transform hover:scale-105 focus:shadow-outline-red`}
                  onClick={handlePlayClick}
                >
                  <svg
                    x="0px"
                    y="0px"
                    className="w-5 h-5"
                    fill={headerText}
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
                  {isEp && (
                    <span className="pl-2 text-sm sm:text-lg lg:text-base">
                      PLAY THE EPISODE
                    </span>
                  )}
                  {!isEp && (
                    <span className="pl-2 text-sm sm:text-lg lg:text-base">
                      PLAY NOW
                    </span>
                  )}
                </button>
              </span>
              <div className="hidden pl-4 lg:block">
                {isEp && (
                  <Link href="/">
                    <a>
                      <p className="text-xl hover:underline font-titleLanding">
                        - by {data.title}
                      </p>
                    </a>
                  </Link>
                )}
                {!isEp && (
                  <>
                    <p className="text-xs font-thin ">LATEST</p>
                    <p className="text-lg ">{data.episodes[0].title}</p>
                  </>
                )}
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
        <div
          data-name="bottom-part"
          className="flex items-center justify-center mt-10 sm:mx-20 lg:mt-12 lg:justify-start"
        >
          <SubscribeList
            directoriesList={data.directories}
            rss={data.feed_url}
          />
          <div className="pl-10 lg:block">
            <SupportButton />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default NewHeader;
