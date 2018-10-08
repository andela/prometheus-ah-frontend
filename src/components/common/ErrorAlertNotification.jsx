import React from 'react';

/**
   * Error alert notification
   * @param {*} props - Response object
   * @returns {*} props.errors - with props.errors
   */
const ErrorAlertNotification = props => (
  <div className="alert alert-danger fade show" role="alert">
    <button type="button" className="close" onClick={() => props.onClick()}>
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>{props.errors}</strong>
  </div>);

export default ErrorAlertNotification;
