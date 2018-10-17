import React from 'react';
import loader from '../../images/loader.gif';

const Loading = () => (
  <div className="loading-center">
    <img src={loader} className="text" alt="Loading..." />
  </div>
);

export default Loading;
