import React, { useState, useEffect, useContext } from 'react';
import PlayerMarkup from './playerMarkup';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';

const AmplitudePlayer = ({ podcastCover }) => {
  const { currentAudio } = useContext(GlobalStateContext);
  const { episodes } = useContext(GlobalStateContext);
  const [amp, setAmp] = useState();
  const [cover, setCover] = useState(podcastCover);

  const isPlayingDispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    if (window !== null) {
      const amplitude = require('amplitudejs');
      setAmp(amplitude);
      if (currentAudio !== null) {
        amplitude.init({
          bindings: {
            37: 'prev',
            39: 'next',
            32: 'play_pause',
          },
          songs: [
            {
              name: currentAudio.title,
              artist: 'Ancient Astronauts',
              url: currentAudio.enclosure.url,
              cover_art_url: cover,
            },
          ],
          callbacks: {
            stop: function () {
              console.log('Audio has been stopped.');
              isPlayingDispatch({ type: 'SET_IS_PLAYING', payload: false });
            },
            pause: function () {
              console.log('Audio has been paused.');
              isPlayingDispatch({ type: 'SET_IS_PLAYING', payload: false });
            },
            play: function () {
              console.log('Audio is playing.');
              isPlayingDispatch({ type: 'SET_IS_PLAYING', payload: true });
            },
          },
        });
        amplitude.play();
      }
    }
  }, [currentAudio]);
  return (
    <div className={`${currentAudio !== null ? 'block' : 'hidden'}`}>
      <PlayerMarkup />
    </div>
  );
};

export default AmplitudePlayer;
