import React, { useState, useEffect, useContext } from 'react';
import PlayerMarkup from './playerMarkup';
import { GlobalStateContext } from '../../../context/globalContextProvider';
// import PlayerWrapper from './amplitudePlayerStyled';

const AmplitudePlayer = ({ podcastCover }) => {
  const { currentAudio } = useContext(GlobalStateContext);
  const [amp, setAmp] = useState();
  const [cover, setCover] = useState(podcastCover);

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
