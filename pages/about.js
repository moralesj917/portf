import React from "react";
import Layout from "../component/layout/Layout";
import Head from "next/head";
import "../styles/styles.scss";
import SectionOne from "../component/About/SectionOne";

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="Description"
        content="About page to Jonathan Morales's portfolio"
      />
    </Head>
    <main>
      <div className="portfolio__background"></div>

      <SectionOne />
    </main>
  </Layout>
);

export default About;
