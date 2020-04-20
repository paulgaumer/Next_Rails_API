import { useContext } from 'react';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import PlayerWrapper from './amplitudePlayerStyled';

const wrapper = () => {
  const { amplitude } = useContext(GlobalStateContext);

  const handleClickBackward = () => {
    const current = amplitude.getSongPlayedSeconds();
    const index = amplitude.getActiveIndex();
    const newTime = current - 15;
    amplitude.skipTo(newTime, index);
  };
  const handleClickForward = () => {
    const current = amplitude.getSongPlayedSeconds();
    const index = amplitude.getActiveIndex();
    const newTime = current + 30;
    amplitude.skipTo(newTime, index);
  };

  const handClickProgress = (e) => {
    var offset = e.target.getBoundingClientRect();
    var x = e.pageX - offset.left;
    amplitude.setSongPlayedPercentage(
      (parseFloat(x) / parseFloat(e.target.offsetWidth)) * 100
    );
  };

  return (
    <PlayerWrapper>
      <div id="flat-black-player-container">
        <div id="player-screen">
          <div id="player-progress-bar-container">
            <progress
              id="song-played-progress"
              className="amplitude-song-played-progress"
              onClick={handClickProgress}
            ></progress>
            <progress
              id="song-buffered-progress"
              className="amplitude-buffered-progress"
              value="0"
            ></progress>
          </div>
          <div id="player-main-body" className="flex justify-around py-4">
            <div className="flex mx-10">
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
                <div id="skip-backward-container" className="mx-4">
                  <div
                    className="skip-backward"
                    id="backward"
                    onClick={handleClickBackward}
                  ></div>
                </div>

                <div id="prev-container" className="mx-4">
                  <div className="amplitude-prev" id="previous"></div>
                </div>

                <div id="play-pause-container" className="flex mx-4">
                  <div className="amplitude-play-pause" id="play-pause"></div>
                </div>

                <div id="next-container" className="mx-4">
                  <div className="amplitude-next" id="next"></div>
                </div>

                <div id="skip-forward-container" className="mx-4">
                  <div
                    className="skip-forward"
                    id="forward"
                    onClick={handleClickForward}
                  ></div>
                </div>

                <div id="speed-container" className="mx-4">
                  <div className="amplitude-playback-speed" id="speed"></div>
                </div>
              </div>
            </div>
            {/* <div id="volume-container" className="flex items-center">
              <img src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/volume.svg" />
              <input
                type="range"
                className="ml-2 amplitude-volume-slider"
                step=".1"
              />
            </div> */}
          </div>
        </div>
      </div>
    </PlayerWrapper>
  );
};

export default wrapper;
