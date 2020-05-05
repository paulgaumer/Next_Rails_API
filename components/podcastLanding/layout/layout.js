import React from 'react';
// import Navbar from './navbar';
import Footer from './footer';

const layout = ({ children }) => {
  return (
    <div className="font-sansLanding">
      {/* <Navbar /> */}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
