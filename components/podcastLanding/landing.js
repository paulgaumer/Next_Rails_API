import React from 'react';
import Layout from './layout/layout';
import Header from './header/header';

const PodcastLanding = ({ data }) => {
  return (
    <Layout>
      <Header data={data} />
    </Layout>
  );
};

export default PodcastLanding;
