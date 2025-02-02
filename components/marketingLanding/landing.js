import React from 'react';
import Layout from './components/layout';
import FacebookPixel from '../seo/pixels/index';
import SEO from './components/seoMarketing';
import Hero from './components/hero';
import Features from './components/features';
import LogoCloud from './components/logo-cloud';
import MailingList from './components/mailing-list';
import Footer from './components/footer';

const MarketingLanding = () => {
  return (
    <Layout>
      {/* In Head */}
      <SEO />
      <FacebookPixel />
      {/* **** */}
      <Hero />
      <Features />
      <LogoCloud />
      <MailingList />
      <Footer />
    </Layout>
  );
};

export default MarketingLanding;
