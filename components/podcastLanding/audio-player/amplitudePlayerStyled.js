import styled from 'styled-components';

const PlayerWrapper = styled.div`
  div#player-main-body {
    background-color: #192029;
  }

  div#player-top {
    position: relative;
  }
  div#player-top img[data-amplitude-song-info='cover_art_url'] {
    /* width: 100%; */
    /* height: 370px; */
    width: 70px;
    height: 70px;
  }

  div#player-progress-bar-container {
    width: 100%;
    height: 4px;
    background-color: #000;
    position: relative;
    margin-top: -6px;
  }
  div#player-progress-bar-container progress#song-played-progress {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 4px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    border: none;
    cursor: pointer;
    background: transparent;
  }
  div#player-progress-bar-container
    progress#song-played-progress[value]::-webkit-progress-bar {
    background: none;
  }
  div#player-progress-bar-container
    progress#song-played-progress[value]::-webkit-progress-value {
    background: white;
  }
  div#player-progress-bar-container
    progress#song-played-progress[value]::-moz-progress-bar {
    background: white;
  }
  div#player-progress-bar-container progress#song-buffered-progress {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 4px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    border: none;
    background: transparent;
  }
  div#player-progress-bar-container
    progress#song-buffered-progress[value]::-webkit-progress-bar {
    background: none;
  }
  div#player-progress-bar-container
    progress#song-buffered-progress[value]::-webkit-progress-value {
    background-color: rgba(255, 255, 255, 0.5);
    transition: width 0.1s ease;
  }
  div#player-progress-bar-container
    progress#song-buffered-progress[value]::-moz-progress-bar {
    background: rgba(255, 255, 255, 0.5);
  }

  div#player-middle {
    /* background-color: #000; */
    /* padding-left: 15px; */
    /* padding-right: 15px; */
    /* padding-top: 20px; */
    /* padding-bottom: 20px; */
    /* text-align: center; */
    /* position: relative; */
  }
  div#player-middle div#time-container {
    color: white;
    width: 100%;
    /* background-color: #000; */
    font-size: 14px;
    font-weight: bold;
  }
  div#player-middle div#time-container span.amplitude-duration-time {
    /* position: absolute; */
    /* top: 0px; */
    /* right: 5px; */
  }
  div#player-middle div#time-container span.amplitude-current-time {
    /* position: absolute; */
    /* top: 0px; */
    /* left: 5px; */
  }
  div#player-middle span.song-name {
    font-family: Lato, sans-serif;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0.5px;
    line-height: 24px;
    display: block;
  }
  div#player-middle div.song-artist-album {
    opacity: 0.5;
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #fff;
    letter-spacing: 0.5px;
    line-height: 16px;
  }

  div#player-bottom {
    background-color: #192029;
    padding-left: 25px;
    padding-right: 25px;
  }
  div#player-bottom div#control-container {
    /* height: 60px; */
    /* padding-top: 40px; */
    padding-top: 5px;
    /* padding-bottom: 40px; */
  }
  div#player-bottom div#control-container div#shuffle-container {
    /* float: left; */
    /* width: 20%; */
    height: 60px;
    padding-top: 21px;
  }
  div#player-bottom div#control-container div#shuffle-container div#shuffle {
    width: 16px;
    height: 17px;
    cursor: pointer;
    margin: auto;
    opacity: 0.7;
  }
  div#player-bottom
    div#control-container
    div#shuffle-container
    div#shuffle.amplitude-shuffle-off {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/shuffle.svg');
  }
  div#player-bottom
    div#control-container
    div#shuffle-container
    div#shuffle.amplitude-shuffle-off:hover {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/shuffle-on.svg');
    opacity: 0.8;
  }
  div#player-bottom
    div#control-container
    div#shuffle-container
    div#shuffle.amplitude-shuffle-on {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/shuffle-on.svg');
    opacity: 1;
  }
  div#player-bottom
    div#control-container
    div#shuffle-container
    div#shuffle.amplitude-shuffle-on:hover {
    opacity: 1;
  }
  div#player-bottom div#control-container div#prev-container {
    /* width: 20%; */
    /* float: left; */
    height: 60px;
    padding-top: 18px;
  }
  div#player-bottom div#control-container div#prev-container div#previous {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/previous.svg');
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin: auto;
  }
  div#player-bottom
    div#control-container
    div#prev-container
    div#previous:hover {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/previous-hover.svg');
  }
  div#player-bottom div#control-container div#play-pause-container {
    /* width: 20%; */
    /* float: left; */
    height: 60px;
  }
  div#player-bottom
    div#control-container
    div#play-pause-container
    div#play-pause {
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin: auto;
  }
  div#player-bottom
    div#control-container
    div#play-pause-container
    div#play-pause.amplitude-playing {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/pause.svg');
  }
  div#player-bottom
    div#control-container
    div#play-pause-container
    div#play-pause.amplitude-paused {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/play.svg');
  }
  div#player-bottom div#control-container div#next-container {
    /* width: 20%; */
    /* float: left; */
    height: 60px;
    padding-top: 18px;
  }
  div#player-bottom div#control-container div#next-container div#next {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/next.svg');
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin: auto;
  }
  div#player-bottom div#control-container div#next-container div#next:hover {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/next-hover.svg');
  }
  div#player-bottom div#control-container div#repeat-container {
    /* float: left; */
    /* width: 20%; */
    height: 60px;
    padding-top: 20px;
  }
  div#player-bottom div#control-container div#repeat-container div#repeat {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/repeat.svg');
    width: 18px;
    height: 20px;
    cursor: pointer;
    margin: auto;
    opacity: 0.7;
  }
  div#player-bottom
    div#control-container
    div#repeat-container
    div#repeat:hover {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/repeat-on.svg');
    opacity: 0.8;
  }
  div#player-bottom
    div#control-container
    div#repeat-container
    div#repeat.amplitude-repeat-on {
    background: url('https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/repeat-on.svg');
    opacity: 1;
  }
  div#player-bottom
    div#control-container
    div#repeat-container
    div#repeat.amplitude-repeat-on:hover {
    opacity: 1;
  }
  div#player-bottom div#control-container::after {
    content: '';
    display: table;
    clear: both;
  }
  div#player-bottom div#volume-container {
    /* padding-bottom: 20px; */
    text-align: center;
  }
  div#player-bottom div#volume-container img {
    display: block;
    float: left;
    margin-top: -9px;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider {
    width: calc(100% - 30px);
    -webkit-appearance: none;
    display: block;
    margin-left: 10px;
    float: left;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider:focus {
    outline: none;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-webkit-slider-runnable-track {
    width: 75%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: #cfd8dc;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    background-color: white;
    cursor: pointer;
    margin-top: -8px;
    -webkit-appearance: none;
    border-radius: 20px;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider:focus::-webkit-slider-runnable-track {
    background: #cfd8dc;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    background: #cfd8dc;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-moz-range-thumb {
    height: 18px;
    width: 18px;
    background-color: white;
    cursor: pointer;
    margin-top: -8px;
    -webkit-appearance: none;
    border-radius: 20px;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: #cfd8dc;
    border-width: 15px 0;
    color: transparent;
    border-color: #192029;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-ms-fill-lower {
    background: transparent;
    border-radius: 2.6px;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-ms-fill-upper {
    background: transparent;
    border-radius: 2.6px;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-ms-thumb {
    height: 18px;
    width: 18px;
    background-color: white;
    cursor: pointer;
    margin-top: 0px;
    border: 20px;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider:focus::-ms-fill-lower {
    background: #cfd8dc;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-ms-fill-upper {
    background: #cfd8dc;
  }
  div#player-bottom
    div#volume-container
    input[type='range'].amplitude-volume-slider::-ms-tooltip {
    display: none;
  }
  div#player-bottom div#volume-container:after {
    content: '';
    display: table;
    clear: both;
  }

  @-moz-document url-prefix() {
    div#player-bottom
      div#volume-container
      input[type='range'].amplitude-volume-slider {
      margin-top: 0px;
    }
  }
  @supports (-ms-ime-align: auto) {
    div#player-bottom
      div#volume-container
      input[type='range'].amplitude-volume-slider {
      margin-top: -4px;
      height: 30px;
      background-color: #192029 !important;
    }
  }
  @media all and (-ms-high-contrast: none) {
    div#player-bottom div#volume-container *::-ms-backdrop,
    div#flat-black-player-container
      div#player-bottom
      div#volume-container
      input[type='range'].amplitude-volume-slider {
      margin-top: -8px;
      background-color: #192029 !important;
      background: #192029 !important;
    }
  }
  /*
  3. Layout
*/
  body {
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-family: 'Lato', sans-serif;
  }

  div#flat-black-player-container {
    position: relative;
    /* max-width: 400px; */
    /* max-height: 90px; */
    margin: auto;
  }

  /*
  4. Pages
*/
  /*
  5. Themes
*/
  /*
  6. Utils
*/
  /*
  7. Vendors
*/
  /*
  8. Animations
*/
  .slide-in-top {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2019-3-25 18:39:54
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
  /**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  .slide-out-top {
    -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2019-3-25 18:45:17
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
  /**
 * ----------------------------------------
 * animation slide-out-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }
  }
  @keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }
  }
`;

export default PlayerWrapper;
