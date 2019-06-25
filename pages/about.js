import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';
import SectionOne from '../component/About/SectionOne';

const About = () => {
  return (
    <Layout>
       <Head>
          <title>About</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="black-bckgrnd">
      <video autoPlay loop className="background-nav">
        <source src="../static/images/matrixRain.webm" type="video/webm"/>
      </video>
      </div>
      
      <SectionOne />
    </Layout>
  );
};

export default About;