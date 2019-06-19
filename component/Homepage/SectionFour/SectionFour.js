import React from 'react';

const SectionFour = () => (
  <div className="SectionFour">
    <h2>Get in Touch</h2>

    <div className="SectionFour-bottom">
      <form>
        <textarea placeholder="Message"></textarea>

        <div className="SectionFour-bottom-div">
          <input type="email" placeholder="Email Address" className="email"/>

          <input placeholder="Full Name"/>

          <button type="submit" value="Submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

export default SectionFour;