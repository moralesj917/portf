import React from "react";
import Layout from "../component/layout/Layout";
import Head from "next/head";
import "../styles/styles.scss";
import SectionOne from "../component/Homepage/SectionOne/SectionOne";
import SectionTwo from "../component/Homepage/SectionTwo/SectionTwo";
import SectionThree from "../component/Homepage/SectionThree/SectionThree";
import SelectionBar from "../component/Homepage/SelectionBar/SelectionBar";

class Index extends React.Component {
  state = {
    active: "skills"
  };

  handleStatus = status => {
    this.setState({
      active: status
    });
  };

  render() {
    let content = <SectionOne />;

    if (this.state.active === "skills") {
      content = <SectionOne />;
    } else if (this.state.active === "projects") {
      content = <SectionTwo />;
    } else if (this.state.active === "experience") {
      content = <SectionThree />;
    }

    return (
      <Layout>
        <Head>
          <title>Home Page</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width "
          />
          <meta
            name="Description"
            content="Home page to Jonathan Morales's portfolio"
          />
          <link rel="icon" href="../static/images/tech-icon-18.jpg"></link>
        </Head>
        <main>
          <div>
            <div className="hero-one" />
            <div className="hero-one-name">
              <h2 className="hero-one-name__title">Jonathan Morales</h2>
            </div>
          </div>
          <SelectionBar handleStatus={this.handleStatus} />
          {this.state.active && content}
        </main>
      </Layout>
    );
  }
}

export default Index;
