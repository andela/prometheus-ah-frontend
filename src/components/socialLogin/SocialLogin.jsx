import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png';
import facebookLogo from '../../images/facebook-logo.png';

const SocialLogin = () => (
  <div className="form-row">
    <div className="form-group col-md-6">
      <Link to="/users/oauth/facebook">
        <button type="submit" className="btn  social-submit-btn">
          <img className="social-submit-logo" alt="facebooklogo" src={facebookLogo} />
                  FACEBOOK
        </button>
      </Link>
    </div>
    <div className="form-group col-md-6">
      <Link to="/users/oauth/google">
        <button type="submit" className="btn social-submit-btn">
          <img className="social-submit-logo" alt="facebooklogo" src={googleLogo} />
                  GOOGLE
        </button>
      </Link>
    </div>
  </div>
);

export default SocialLogin;
