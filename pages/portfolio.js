import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';
import SectionOne from '../component/Portfolio/SectionOne';
import SectionTwo from '../component/Portfolio/SectionTwo';

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="black-bckgrnd"></div>
      <SectionOne />
      <SectionTwo />

    </Layout>
  );
};

export default Portfolio;