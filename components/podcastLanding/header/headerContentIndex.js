import React, { useContext } from 'react';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';
import { GlobalStateContext } from '../../../context/globalContextProvider';

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
    <div className="flex justify-center max-w-3xl">
      <img
        src={data.coverUrl}
        alt="podcast logo"
        className="w-48 h-48 mt-6 rounded"
        onClick={handlePlayClick}
      />
      <div className="pl-10 text-white">
        <h1 className="text-6xl ">{data.name}</h1>
        {/* <p>- by {data.owner.name}</p> */}
        <p className="pt-10">{data.description}</p>
      </div>
    </div>
  );
};

export default HeaderContentIndex;
