import React from 'react';
import PlayerWrapper from './amplitudePlayerStyled';

const wrapper = () => {
  return (
    <PlayerWrapper>
      <div id="flat-black-player-container">
        <div id="player-screen">
          <div id="player-top">
            <img data-amplitude-song-info="cover_art_url" />
          </div>
          <div id="player-progress-bar-container">
            <progress
              id="song-played-progress"
              className="amplitude-song-played-progress"
            ></progress>
            <progress
              id="song-buffered-progress"
              className="amplitude-buffered-progress"
              value="0"
            ></progress>
          </div>
          <div id="player-middle">
            <div id="time-container">
              <span className="amplitude-current-time time-container"></span>
              <span className="amplitude-duration-time time-container"></span>
            </div>
            <div id="meta-container">
              <span
                data-amplitude-song-info="name"
                className="song-name"
              ></span>

              <div className="song-artist-album">
                <span data-amplitude-song-info="artist"></span>
              </div>
            </div>
          </div>
          <div id="player-bottom">
            <div id="control-container">
              <div id="shuffle-container">
                <div
                  className="amplitude-shuffle amplitude-shuffle-off"
                  id="shuffle"
                ></div>
              </div>

              <div id="prev-container">
                <div className="amplitude-prev" id="previous"></div>
              </div>

              <div id="play-pause-container">
                <div className="amplitude-play-pause" id="play-pause"></div>
              </div>

              <div id="next-container">
                <div className="amplitude-next" id="next"></div>
              </div>

              <div id="repeat-container">
                <div className="amplitude-repeat" id="repeat"></div>
              </div>
            </div>

            <div id="volume-container">
              <img src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/volume.svg" />
              <input
                type="range"
                className="amplitude-volume-slider"
                step=".1"
              />
            </div>
          </div>
        </div>
      </div>
    </PlayerWrapper>
  );
};

export default wrapper;
