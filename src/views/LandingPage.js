import React, { Component } from 'react';
import Footer from '../components/Footer';
import logo from '../images/logo.png';


/**
   * @class Modal
   */
class LandingPage extends Component {
  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    return (
      <div>
        <main role="main" className="container">
          This is from the LandingPage component
          <img src={logo} alt="logo" height="50px" />
        </main>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
