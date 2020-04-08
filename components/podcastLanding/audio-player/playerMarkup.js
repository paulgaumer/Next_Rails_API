import React from 'react';
import PlayerWrapper from './amplitudePlayerStyled';

const wrapper = () => {
  return (
    <PlayerWrapper>
      <div id="flat-black-player-container">
        <div id="player-screen">
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
          <div id="player-main-body" className="flex justify-around py-4">
            <div className="flex">
              <div id="player-top">
                <img
                  data-amplitude-song-info="cover_art_url"
                  className="rounded shadow"
                />
              </div>

              <div id="player-middle" className="ml-6">
                <div id="time-container" className="flex justify-between">
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
            </div>
            <div id="player-bottom" className="flex">
              <div id="control-container" className="flex">
                <div id="shuffle-container" className="mx-4">
                  <div
                    className="amplitude-shuffle amplitude-shuffle-off"
                    id="shuffle"
                  ></div>
                </div>

                <div id="prev-container" className="mx-4">
                  <div className="amplitude-prev" id="previous"></div>
                </div>

                <div id="play-pause-container" className="mx-4">
                  <div className="amplitude-play-pause" id="play-pause"></div>
                </div>

                <div id="next-container" className="mx-4">
                  <div className="amplitude-next" id="next"></div>
                </div>

                <div id="repeat-container" className="mx-4">
                  <div className="amplitude-repeat" id="repeat"></div>
                </div>
              </div>
            </div>
            <div id="volume-container" className="flex items-center">
              <img src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/volume.svg" />
              <input
                type="range"
                className="ml-2 amplitude-volume-slider"
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
