import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFoundPage = () => (
  <div>
    <div className="not-found">
      <h1>Sorry, we are yet to write that article</h1>
      <p>Please click the button to check out our other articles</p>
      {' '}
      <Link to="/"><button type="button" className="not-found-btn">Go home</button></Link>
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
