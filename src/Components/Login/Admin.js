import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock, faUserTie } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../Tittle/admin.jpg';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
 

export const Admin = (props) => {
    const [adminid, setAdminid] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');                      
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate('/sidebar');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        
    }

    const handleFormSwitch = () => {
        setIsLogin(!isLogin);
       
    }
    // const handleSubmit1=()=>
    // {
    //     navigate('/sidebar');
    // }

    return (
        <div className="home-container">
        <Col xs={6} md={4}>
          <Image className='content' src={admin} thumbnail />
        </Col>
        <div className="container">
            <div className="auth-form-container" style={{ maxWidth: '450px', margin: 'auto', marginTop: '50px' }}>
                <h2>{isLogin ? 'Admin-Login' : 'Admin-Signup'}</h2>
                <form className={isLogin ? "login-form" : "register-form"} onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"><FontAwesomeIcon icon={faUser} /> Full name</label>
                                <input value={name} name="name" onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Full Name" />
                            </div>
                        </>
                    )}
                    <div className="mb-3">
                        <label htmlFor="Employee-id" className="form-label"><FontAwesomeIcon icon={faUserTie} /> Admin ID</label>
                        <input value={adminid} onChange={(e) => setAdminid(e.target.value)} type="text" className="form-control" id="shopid" placeholder="123@tweytyr" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="youremail@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><FontAwesomeIcon icon={faLock} /> Password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="form-control" id="password" placeholder="********" />
                    </div>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Log In' : 'Signup'}</button>
                </form>
                <button className="btn btn-dark" onClick={handleFormSwitch} style={{ marginTop: '20px' }}>
                    {isLogin ? "Don't have an account?-Signup here." : "Already have an account?-Login here."}
                </button>
                {/* <div>
                <button className="btn btn-primary" onClick={handleSubmit1} >Switch</button>
                </div> */}
            </div>
        </div>
        </div>
    );
}
