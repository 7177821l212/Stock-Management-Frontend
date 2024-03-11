import React from 'react'
import {Link} from 'react-router-dom';
import './Drop.css';
// import KVS from '../Tittle/KVS.png';
export default function Drop() {
  return (
    <nav className='nav'>
    <div className='container'>
     <div className='house'></div> 
    <h3> STOCK MANAGEMENT</h3>
        {/* <img src={KVS} alt='KVS' className='logo'/>  */}
        <ul className='nav-link'>
            <li className='hero'><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>SERVICES</Link></li>
            <li><Link to='/loginsignup'>REGISTER</Link></li>
            <li><Link to='/admin'>ADMIN</Link></li>
            </ul>
        </div>
    </nav>
  )
}
