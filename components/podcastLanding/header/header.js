import React from 'react';
import styled from 'styled-components';

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
  return (
    <HeaderContainer className="relative flex justify-center py-24">
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="flex justify-center max-w-3xl">
          <img
            src={data.coverUrl}
            alt="podcast logo"
            className="w-48 h-48 mt-6 rounded"
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
              <span class="inline-flex rounded-md shadow-sm mx-2">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
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
