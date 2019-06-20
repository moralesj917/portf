import React from 'react';
import Layout from '../component/layout/Layout';
import Head from 'next/head';
import '../styles/styles.scss';
import SectionOne from '../component/Homepage/SectionOne/SectionOne';
import SectionTwo from '../component/Homepage/SectionTwo/SectionTwo';
import SectionThree from '../component/Homepage/SectionThree/SectionThree';
import SectionFour from '../component/Homepage/SectionFour/SectionFour';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Home Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
         
        <video autoPlay className="background-gif">
          <source src="../static/images/matrixRain.webm" type="video/webm"/>
        </video>
        
        <audio src="../static/audio/linkinpark.mp3" controls autoPlay loop/>

        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </Layout>
    );
  };
};

export default Index;
