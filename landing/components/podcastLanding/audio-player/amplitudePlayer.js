import React, { useEffect, useContext } from 'react';
import PlayerMarkup from './playerMarkup';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { GlobalDispatchContext } from '../../../context/globalContextProvider';

const AmplitudePlayer = () => {
  const { currentAudio } = useContext(GlobalStateContext);
  const { episodes } = useContext(GlobalStateContext);

  const isPlayingDispatch = useContext(GlobalDispatchContext);
  const amplitudeDispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    if (window !== null) {
      const amplitude = require('amplitudejs');
      amplitudeDispatch({ type: 'SET_AMPLITUDE', payload: amplitude });

      const episodesList = episodes.map((ep) => {
        return {
          name: ep.title,
          artist: ep.podcast_title,
          url: ep.enclosure.url,
          cover_art_url: ep.cover_image.url,
        };
      });

      amplitude.init({
        bindings: {
          37: 'prev',
          39: 'next',
          32: 'play_pause',
        },
        songs: episodesList,
        callbacks: {
          initialized: function () {
            // console.log('Audio has been initialized.');
          },
          stop: function () {
            // console.log('Audio has been stopped.');
            isPlayingDispatch({ type: 'SET_IS_PLAYING', payload: false });
          },
          pause: function () {
            // console.log('Audio has been paused.');
            isPlayingDispatch({ type: 'SET_IS_PLAYING', payload: false });
          },
          play: function () {
            // console.log('Audio is playing.');
            isPlayingDispatch({ type: 'SET_IS_PLAYING', payload: true });
          },
        },
      });
    }
  }, [episodes]);

  return (
    <div className={`${currentAudio !== null ? 'block' : 'hidden'}`}>
      <PlayerMarkup />
    </div>
  );
};

export default AmplitudePlayer;
