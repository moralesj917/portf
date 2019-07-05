import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';
import SectionOne from '../component/About/SectionOne';
import SectionTwo from '../component/About/SectionTwo';

const About = () => {
  return (
    <Layout>
       <Head>
          <title>About</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="portfolio__background"></div>
      
      <SectionOne />
      <hr />
      <SectionTwo />
    </Layout>
  );
};

export default About;