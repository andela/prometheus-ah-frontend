import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../images/logo.png';
import '../styles/scss/App.scss';
import '../styles/scss/SignUp.scss';

const LandingPage = props => (
  <div>
    <Header {...props}/>
    <main role="main" className="container">
      This is from the LandingPage component
      <img src={logo} alt="logo" height="50px" />
    </main>
    <Footer />
  </div>
);

export default LandingPage;