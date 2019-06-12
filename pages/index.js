import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';
import SectionOne from '../component/Homepage/SectionOne/SectionOne';
import SectionTwo from '../component/Homepage/SectionTwo/SectionTwo';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Home Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <img className="background-gif" src="../static/images/matrix.gif" alt="matrix gif" />
        <SectionOne />
        <SectionTwo />
      </Layout>
    );
  };
};

export default Index;
