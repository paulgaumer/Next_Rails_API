import React, { useContext } from 'react';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';
import { GlobalStateContext } from '../../../context/globalContextProvider';

const HeaderContentShow = ({ episode, podcast }) => {
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
    <div className="flex flex-col items-center max-w-3xl">
      <img
        src={podcast.coverUrl}
        alt="podcast logo"
        className="w-48 h-48 mt-6 rounded"
        onClick={handlePlayClick}
      />
      <div className="pl-10 text-white">
        <h1 className="text-2xl ">{episode.title}</h1>
        {/* <p>- by {data.owner.name}</p> */}
        <p className="pt-10">{podcast.title}</p>
      </div>
    </div>
  );
};

export default HeaderContentShow;
