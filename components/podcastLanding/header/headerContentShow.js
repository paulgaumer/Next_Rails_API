import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';
import { GlobalStateContext } from '../../../context/globalContextProvider';

const HeaderContentShow = ({ data }) => {
  const audioDispatch = useContext(GlobalDispatchContext);
  const { amplitude } = useContext(GlobalStateContext);
  const { episode } = data;

  const handlePlayClick = () => {
    audioDispatch({
      type: 'PLAY_EPISODE',
      payload: data.episodes[0],
    });
    amplitude.playSongAtIndex(0);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl">
      <img
        src={episode.cover_image.url}
        alt="podcast logo"
        className="w-48 h-48 mt-6 rounded"
        onClick={handlePlayClick}
      />
      <div className="mt-10 text-center text-white">
        <h1 className="text-2xl">{episode.title}</h1>
        <Link href="/">
          <a>
            <p className="inline-block pt-10 pb-1 border-b">{data.title}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderContentShow;
