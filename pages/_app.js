import React from 'react';
import App from 'next/app';
import GlobalContextProvider from '../context/globalContextProvider';
import '../styles/styles.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    );
  }
}

export default MyApp;
