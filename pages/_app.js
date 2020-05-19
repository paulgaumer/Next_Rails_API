import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import GlobalContextProvider from '../context/globalContextProvider';
import '../styles/styles.css';
import AmplitudePlayer from '../components/podcastLanding/audio-player/amplitudePlayer';
require('typeface-montserrat');
require('typeface-roboto');
require('typeface-poppins');

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <GlobalContextProvider>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
        <div className="fixed bottom-0 z-20 w-full">
          <AmplitudePlayer />
        </div>
      </GlobalContextProvider>
    );
  }
}

export default MyApp;
