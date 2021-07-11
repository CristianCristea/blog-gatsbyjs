import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import Jumbotron from '../components/jumbotron';

import '../styles/index.scss';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home' />
      <Jumbotron />
    </Layout>
  );
};

export default IndexPage;
