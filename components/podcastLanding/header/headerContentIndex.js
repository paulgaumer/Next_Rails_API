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
    <div className="flex justify-center max-w-4xl">
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
        {/* <p>- by {data.owner.name}</p> */}
        {/* <p className="pt-10">{data.description}</p> */}
      </div>
    </div>
  );
};

export default HeaderContentIndex;
