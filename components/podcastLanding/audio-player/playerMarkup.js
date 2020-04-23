import { useContext, useState } from 'react';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import PlayerWrapper from './amplitudePlayerStyled';
import BackwardBtn from './backwardBtn';
import ForwardBtn from './forwardBtn';
import PlayBtn from './playBtn';
import PauseBtn from './pauseBtn';
import Speed10 from './speed10';
import Speed15 from './speed15';
import Speed20 from './speed20';

const wrapper = () => {
  const { amplitude } = useContext(GlobalStateContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(10);

  const handleClickBackward = () => {
    const current = amplitude.getSongPlayedSeconds();
    const index = amplitude.getActiveIndex();
    const newTime = current - 10;
    amplitude.skipTo(newTime, index);
  };
  const handleClickForward = () => {
    const current = amplitude.getSongPlayedSeconds();
    const index = amplitude.getActiveIndex();
    const newTime = current + 30;
    amplitude.skipTo(newTime, index);
  };

  const handleClickProgress = (e) => {
    var offset = e.target.getBoundingClientRect();
    var x = e.pageX - offset.left;
    amplitude.setSongPlayedPercentage(
      (parseFloat(x) / parseFloat(e.target.offsetWidth)) * 100
    );
  };

  const handlePlayClick = (e) => {
    e.currentTarget.className.includes('playing')
      ? setIsPlaying(true)
      : setIsPlaying(false);
  };
  const handleSpeedClick = (e) => {
    if (e.currentTarget.className.includes('15')) {
      setSpeed(15);
    } else if (e.currentTarget.className.includes('20')) {
      setSpeed(20);
    } else {
      setSpeed(10);
    }
  };

  return (
    <PlayerWrapper>
      <div id="flat-black-player-container">
        <div id="player-screen">
          <div id="player-progress-bar-container">
            <progress
              id="song-played-progress"
              className="amplitude-song-played-progress"
              onClick={handleClickProgress}
            ></progress>
            <progress
              id="song-buffered-progress"
              className="amplitude-buffered-progress"
              value="0"
            ></progress>
          </div>
          <div id="player-main-body" className="flex justify-center py-4">
            <div className="flex mx-4">
              <div className="flex mr-4 sm:mr-10">
                <div id="player-top" className="flex-shrink-0">
                  <img
                    data-amplitude-song-info="cover_art_url"
                    className="rounded shadow"
                  />
                </div>

                <div id="player-middle" className="ml-6">
                  <div id="time-container" className="flex sm:justify-between">
                    <span className="amplitude-current-time time-container"></span>
                    <span className="px-1 sm:hidden">/</span>
                    <span className="amplitude-duration-time time-container"></span>
                  </div>
                  <div id="meta-container" className="">
                    <span
                      data-amplitude-song-info="name"
                      className="text-sm song-name sm:text-base"
                    ></span>

                    <div className="hidden song-artist-album md:block">
                      <span data-amplitude-song-info="artist"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="player-bottom" className="flex">
                <div id="control-container" className="flex">
                  <div
                    id="skip-backward-container"
                    className="items-center hidden mx-4 sm:flex"
                    // onClick={handleClickBackward}
                  >
                    <div
                      className="skip-backward"
                      id="backward"
                      onClick={handleClickBackward}
                    >
                      <BackwardBtn />
                    </div>
                  </div>

                  {/* <div id="prev-container" className="mx-4">
                  <div className="amplitude-prev" id="previous"></div>
                </div> */}

                  <div
                    id="play-pause-container"
                    className="flex items-center sm:mx-4"
                  >
                    <div
                      className="amplitude-play-pause"
                      id="play-pause"
                      onClick={handlePlayClick}
                    >
                      {isPlaying && <PauseBtn />}
                      {!isPlaying && <PlayBtn />}
                    </div>
                  </div>

                  {/* <div id="next-container" className="mx-4">
                  <div className="amplitude-next" id="next"></div>
                </div> */}

                  <div
                    id="skip-forward-container"
                    className="items-center hidden mx-4 md:flex"
                  >
                    <div
                      className="skip-forward"
                      id="forward"
                      onClick={handleClickForward}
                    >
                      <ForwardBtn />
                    </div>
                  </div>

                  <div
                    id="speed-container"
                    className="items-center hidden mx-4 sm:flex"
                  >
                    <div
                      className="amplitude-playback-speed"
                      id="speed"
                      onClick={handleSpeedClick}
                    >
                      {speed === 10 && <Speed10 />}
                      {speed === 15 && <Speed15 />}
                      {speed === 20 && <Speed20 />}
                    </div>
                  </div>
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
