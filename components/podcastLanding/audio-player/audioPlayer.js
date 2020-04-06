import React from 'react';

const AudioPlayer = ({ player }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: player,
      }}
    />
  );
};

export default AudioPlayer;
