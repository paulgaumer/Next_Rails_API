import React from 'react';
import PodcastInfo from './PodcastInfo';
import PodcastDirectories from './PodcastDirectories';

const index = ({ podcastData }) => {
  return (
    <div>
      <PodcastInfo podcastData={podcastData} />
      <PodcastDirectories podcastData={podcastData} />
    </div>
  );
};

export default index;
