import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';
import SectionOne from '../component/Homepage/SectionOne/SectionOne';
import SectionTwo from '../component/Homepage/SectionTwo/SectionTwo';
import SectionThree from '../component/Homepage/SectionThree/SectionThree';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Home Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="../static/images/tech-icon-18.jpg"></link>
        </Head>
         
        <img className="hero-one" src="../static/images/photo1.jpeg"/>
        <h2 className="hero-one-name">Jonathan Morales</h2>
        
        <SectionOne />

        <SectionTwo />

        <SectionThree />
      </Layout>
    );
  };
};

export default Index;
