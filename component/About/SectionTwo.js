import React from "react";
import FutureCards from "./futureCards/FutureCards";

const SectionTwo = () => (
  <div className="About-SectionTwo">
    <h1>Future Endeavors</h1>

    <FutureCards
      title="Machine Learning"
      imgFilePath="../../static/images/machine-learning.png"
    />
    <FutureCards title="Vue.js" imgFilePath="../../static/images/vue.png" />
    <FutureCards title="Python" imgFilePath="../../static/images/python.png" />
    <FutureCards title="Kubernetes" imgFilePath="../../static/images/kubernetes.png" />
  </div>
);

export default SectionTwo;
