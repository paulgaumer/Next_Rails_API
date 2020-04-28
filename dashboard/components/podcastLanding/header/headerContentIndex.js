import React, { useContext } from 'react';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import SubscribeList from './subscribe/subscribeList';

const HeaderContentIndex = ({ data }) => {
  const audioDispatch = useContext(GlobalDispatchContext);
  const { amplitude } = useContext(GlobalStateContext);

  const handlePlayClick = () => {
    audioDispatch({
      type: 'PLAY_MOST_RECENT_EPISODE',
      payload: data.episodes[0],
    });
    amplitude.playSongAtIndex(0);
  };

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={data.cover_image.url}
          alt="podcast logo"
          className="w-56 h-56 mt-6 rounded"
          onClick={handlePlayClick}
        />
        <div className="flex flex-col justify-center pl-20 text-white">
          <h1 className="text-6xl ">{data.title}</h1>
          <div className="flex justify-center mt-10 ">
            <SubscribeList />
          </div>
        </div>
      </div>
      <div
        className="px-12 py-10 mx-20 mt-24 text-white rounded shadow-inner"
        style={{ backgroundColor: 'rgba(10, 10, 10, 0.35)' }}
      >
        <h2 className="inline-block pb-1 mb-4 text-xl font-semibold text-gray-200 border-b border-red-400">
          About us
        </h2>
        <p className="leading-loose">{data.description}</p>
      </div>
    </div>
  );
};

export default HeaderContentIndex;
