import React from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import LoginImage from '../images/login.svg'; 
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';


const Container = () => {
    const location = useLocation();

  return (
    <>
    <Topbar />
    <div className="container" >
        <h1 className="heading neoStore">NeoSTORE</h1>
        <div className="row">
            <div className="col-md-6 center align-self-center image">
                <img src={LoginImage} alt="Log In" />
            </div>
            <div className="col-md-6">
                <div className="row justify-content">
                  {location.pathname ==="/" && <LoginCard /> }  
                  {location.pathname ==="/signup" && <SignupCard /> }  
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Container
