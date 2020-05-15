import React from 'react';
import App from 'next/app';
import GlobalContextProvider from '../context/globalContextProvider';
import '../styles/styles.css';
import AmplitudePlayer from '../components/podcastLanding/audio-player/amplitudePlayer';
require('typeface-montserrat');
require('typeface-roboto');

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <GlobalContextProvider>
        <Component {...pageProps} />
        <div className="fixed bottom-0 z-20 w-full">
          <AmplitudePlayer />
        </div>
      </GlobalContextProvider>
    );
  }
}

export default MyApp;
