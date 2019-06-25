import React from 'react';
import FutureCards from './futureCards/FutureCards';

const SectionTwo = () => (
  <div className="About-SectionTwo">
    <h1>Future Endeavors</h1>
    <FutureCards 
      title="Learn Golang"
      summary="I'm energetic Software engineer who loves to solve problems. I enjoy working in a 
      team environment because it allows me to have different perspectives on writing and creating 
      code. I always love challenging myself to learn new skills as well as sharpening the skills i already have."
      imgFilePath="../../static/images/golang_gopher.png"
    />
    <FutureCards 
      title="Manchine Learning"
      summary="I'm energetic Software engineer who loves to solve problems. I enjoy working in a 
      team environment because it allows me to have different perspectives on writing and creating 
      code. I always love challenging myself to learn new skills as well as sharpening the skills i already have."
      imgFilePath="../../static/images/machine-learning.png"
    />
    <FutureCards 
      title="Vue.js"
      summary="I'm energetic Software engineer who loves to solve problems. I enjoy working in a 
      team environment because it allows me to have different perspectives on writing and creating 
      code. I always love challenging myself to learn new skills as well as sharpening the skills i already have."
      imgFilePath="../../static/images/vue.png"
    />
    <FutureCards 
      title="AWS"
      summary="I'm energetic Software engineer who loves to solve problems. I enjoy working in a 
      team environment because it allows me to have different perspectives on writing and creating 
      code. I always love challenging myself to learn new skills as well as sharpening the skills i already have."
      imgFilePath="../../static/images/aws.png"
    />
    <FutureCards 
      title="Python"
      summary="I'm energetic Software engineer who loves to solve problems. I enjoy working in a 
      team environment because it allows me to have different perspectives on writing and creating 
      code. I always love challenging myself to learn new skills as well as sharpening the skills i already have."
      imgFilePath="../../static/images/python.png"
    />
  </div>
);

export default SectionTwo;