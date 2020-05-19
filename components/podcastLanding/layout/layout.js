import React from 'react';
import Footer from './footer';

const layout = ({ children, socialsList }) => {
  return (
    <div className="font-sansLanding">
      <div>{children}</div>
      <Footer socialsList={socialsList} />
    </div>
  );
};

export default layout;
