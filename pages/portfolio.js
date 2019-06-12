import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>This is Portfolio</h1>
    </Layout>
  );
};

export default Portfolio;