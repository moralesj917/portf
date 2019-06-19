import React from 'react';
import SectionThreeCard from './SectionThreeCard';

const SectionThree = () => (
  <div className="SectionThree">
    <h2>Experience</h2>

    <div className="SectionThree-bottom">
      <SectionThreeCard 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, 
        mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id."
        job="SSI Schaefer"
      />

      <SectionThreeCard 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, 
        mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id."
        job="Personal"
      />
      
      <SectionThreeCard 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, 
        mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id."
        job="CPCC"
      />
    </div>
  </div>
);

export default SectionThree;