import React from 'react';
import Layout from './components/layout';
import SEO from './components/seo';
import Hero from './components/hero';
import Features from './components/features';
import LogoCloud from './components/logo-cloud';
import MailingList from './components/mailing-list';
import Footer from './components/footer';

const MarketingLanding = () => {
  return (
    <Layout>
      {/* <SEO /> */}
      <Hero />
      <Features />
      <LogoCloud />
      <MailingList />
      <Footer />
    </Layout>
  );
};

export default MarketingLanding;
