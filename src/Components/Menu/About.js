// About.js

import React from 'react';
import about1 from '../Tittle/about1.jpg'; 
import logo1 from '../Tittle/logo1.png'; 
import logo2 from '../Tittle/logo2.png';
import logo3 from '../Tittle/logo3.png';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
  return (
    <div className="home-container">
      <Col xs={6} md={4}>
        <Image className='content' src={about1} thumbnail />
      </Col>
      <div className="hover">
        <h1>
          Who Are We ??
          <span className="blinking-pointer">|</span>
        </h1>
      </div>
      <div className='heading'>
        <h3 className='h1'>To Maintain Perfect Stock Management</h3>
        <img src={logo1} alt='logo' />
        <h3 className='h2'>Keep Everything Organized  With Us</h3>
        <img src={logo2} alt='logo' />
        <h3 className='h3'>Grow With Us..Towards Success</h3>
        <img src={logo3} alt='logo' />


      </div>
    </div>
  );
}
