import React from 'react';
import bak from '../Tittle/bak.gif'; 
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const Home = () => {
  return (
    <div className="home-container">
      <Col xs={6} md={4}>
        <Image className='content' src={bak} thumbnail />
      </Col>

      <div className="right-section">
        <div className="motto-box">
          <div className="motto">
            <h2 className='mot'>Optimize Your Stationery Warehouse</h2>
            <p className="slogan">Empowering your business with efficient stock management.</p>
          </div>
          
          <div className="motto">
            <h2 className='mot'>Maintain Your Stationery Stock With Us</h2>
            <p className="slogan">Make Your Shop Better With Us...</p>
          </div>
          <div className="motto">
            <h2 className='mot'>Empowering productivity with curated tools for modern minds.</h2>
            <p className="slogan">Elevate your workspace, elevate your success..</p>
          </div>
          <div className="motto">
            <h2 className='mot'>Where efficiency meets design, and productivity takes flight</h2>
            <p className="slogan">Express yourself boldly with our vibrant collection.</p>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Home;
