import React from 'react';
import Layout from '../component/Layout';
import '../styles/styles.scss';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <img className="background-gif" src="../static/images/ezgif-2-75679e8f20.gif" alt="matrix gif" />
      </Layout>
    );
  };
};

export default Index;
