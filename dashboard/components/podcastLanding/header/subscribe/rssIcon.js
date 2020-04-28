import React from 'react';

const RssIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="RSSicon"
      viewBox="0 0 8 8"
      className={`${width} ${height}`}
    >
      <rect
        class="button"
        stroke="none"
        fill="orange"
        width="8"
        height="8"
        rx="1.5"
      />
      <circle class="symbol" stroke="none" fill="white" cx="2" cy="6" r="1" />
      <path
        class="symbol"
        stroke="none"
        fill="white"
        d="m 1,4 a 3,3 0 0 1 3,3 h 1 a 4,4 0 0 0 -4,-4 z"
      />
      <path
        class="symbol"
        stroke="none"
        fill="white"
        d="m 1,2 a 5,5 0 0 1 5,5 h 1 a 6,6 0 0 0 -6,-6 z"
      />
    </svg>
  );
};

export default RssIcon;
