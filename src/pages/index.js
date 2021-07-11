import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Head title='Home' />
        <h1>Hello world</h1>
        <Link to='/blog'>Blog</Link>
      </Layout>
    </main>
  );
};

export default IndexPage;
