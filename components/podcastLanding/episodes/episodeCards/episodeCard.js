import React from 'react';
import CardMobile from './cardMobile';
import CardDesktop from './cardDesktop';

const EpisodeCard = ({ ep, epIndex }) => {
  return (
    <>
      <div className="md:hidden">
        <CardMobile ep={ep} epIndex={epIndex} />
      </div>
      <div className="hidden md:block">
        <CardDesktop ep={ep} epIndex={epIndex} />
      </div>
    </>
  );
};

export default EpisodeCard;
