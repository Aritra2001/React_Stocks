import React from 'react';
import './Herosec.css'
import Design from '../images/Design.png'
import Bar from '../images/Bar.png'
import Purple from '../images/Purple.png'
import Green from '../images/Green.png'

const Herosec = () => {
  return (
    <div className="herosec">
        <div className="hero-l">
            <p id='one'>Finance</p>
            <div className="border-1"></div>
            <p id='two'>Digital</p>
            <p id='three'>simple design with more efficiency.</p>
            <img src={Design} alt="" />
            <button type='button'>Get Started</button>
        </div>
        <div className="hero-r">
          <img src={Bar} alt="" id='img-1'/>
          <img src={Purple} alt="" id='img-2'/>
          <img src={Green} alt="" id='img-3'/>
        </div>
        
    </div>
  );
}

export default Herosec;
