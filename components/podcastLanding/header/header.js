import React from 'react';
import styled from 'styled-components';
import AudioPlayer from '../audio-player/audioPlayer';

const Cut = styled.div`
  /* border: 1px solid red; */
  background: #fff;
  position: absolute;
  top: 250px;
  width: 120%;
  height: 320px;
  transform-origin: center top;
  transform: rotate(-5deg);
`;

const Index = ({ name, audioPlayer }) => {
  return (
    <div className="relative">
      <div
        className="flex flex-col justify-center bg-blue-200"
        style={{ height: '30rem' }}
      >
        <div className="z-10 flex items-center justify-center mb-10">
          <img
            src="https://via.placeholder.com/300"
            alt="podcast logo"
            className="rounded"
          />
          <h1 className="pl-10 text-5xl ">{name}</h1>
        </div>
        <div className="z-10 flex justify-center">
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
      <div className="absolute mx-auto " style={{ bottom: '-75px' }}>
        <div className="">
          <AudioPlayer player={audioPlayer} />
        </div>
      </div>
    </div>
  );
};

export default Index;
