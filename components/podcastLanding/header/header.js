import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';

const HeaderContainer = styled.div`
  /* height: 35rem; */
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100vw;
  min-width: 100vw;
  z-index: -1;
  margin: 0px;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    min-width: 100%;
    top: 50%;
    left: 0px;
    transform: translateY(-50%) scale(2);
    filter: blur(20px);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.55);
  }
`;

const Index = ({ data }) => {
  const audioDispatch = useContext(GlobalDispatchContext);
  return (
    <HeaderContainer className="relative flex justify-center py-24">
      <div className="z-10 flex flex-col items-center justify-center mx-auto max-w-7xl">
        <div className="flex justify-center max-w-3xl">
          <img
            src={data.coverUrl}
            alt="podcast logo"
            className="w-48 h-48 mt-6 rounded"
            onClick={() =>
              audioDispatch({
                type: 'PLAY_MOST_RECENT_EPISODE',
                payload: data.episodes[0],
              })
            }
          />
          <div className="pl-10 text-white">
            <h1 className="text-6xl ">{data.name}</h1>
            <p>- by {data.owner.name}</p>
            <p className="pt-10">{data.description}</p>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          {['Itunes', 'Spotify', 'Overcasr', 'RSS'].map((btn) => {
            return (
              <span className="inline-flex mx-2 rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  {btn}
                </button>
              </span>
            );
          })}
        </div>
      </div>
      <BackgroundContainer>
        <img src={data.coverUrl} alt="podcast logo" />
      </BackgroundContainer>
    </HeaderContainer>
  );
};

export default Index;
