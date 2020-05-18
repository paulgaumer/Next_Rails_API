import React from 'react';
import Footer from './footer';

const layout = ({ children }) => {
  return (
    <div className="font-sansLanding">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
