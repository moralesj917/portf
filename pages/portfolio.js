import React from "react";
import Layout from "../component/layout/Layout";
import Head from "next/head";
import "../styles/styles.scss";
import SectionOne from "../component/Portfolio/SectionOne";
import SectionTwo from "../component/Portfolio/SectionTwo";
import SectionThree from "../component/Portfolio/SectionThree";

const Portfolio = () => (
  <Layout>
    <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="Description"
        content="Projects page to Jonathan Morales's portfolio"
      />
      <link rel="icon" href="../static/images/tech-icon-18.jpg"></link>
    </Head>
    <main>
      <div className="portfolio__background"></div>
      <div className="Portfolio">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </main>
  </Layout>
);

export default Portfolio;
