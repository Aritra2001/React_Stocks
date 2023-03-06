import React from 'react';
import Logo from '../images/logo.png'
import Login from '../Login/Login';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className="Nav-l">
        <img src={Logo} alt="" />
        <a href='/'><p>/aritra@i.am</p></a>
      </div>
      <div className="Nav-c">
        <ul>
            <a href='/'><li>Portfolio .</li></a>
            <a href='/'><li>&nbsp;Investment .</li></a>
            <a href='/'><li>&nbsp;Stocks</li></a>
        </ul>
      </div>
      <div className="Nav-r">
        <a href='login'><p>Log in</p></a>
        <a href='signup'><button type='button'>Sign Up</button></a>
     
      </div>
    </div>
  );
}

export default Navbar;
