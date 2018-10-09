import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticlesComponent from '../components/articles/Articles';
import logo from '../images/logo.png';
import '../styles/scss/App.scss';

const LandingPage = () => (
  <div>
    <Header />
    <main role="main" className="container">
      This is from the LandingPage component
      {' '}
      <Link to={routes.SIGN_IN}>SIGN_IN</Link>
      <br />
      <img src={logo} alt="logo" height="50px" />
      <ArticlesComponent />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
