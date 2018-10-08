import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './modals/Modal';
import { showSignupModal } from '../actions/modal.action';


export const Header = (props) => {
  if (!props.auth.isAuthenticated) {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="/">Authors Haven</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item" id="signup">
                <Link
                  to="#"
                  className="nav-link"
                  onClick={props.showSignupModal}
                  >
                  Sign Up
                </Link>
                <Modal />
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" data-toggle="modal" data-target="">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/">Authors Haven</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


const mapStateToProps = state => ({
  auth: state.auth,
  modal: state.modal
});


export default connect(mapStateToProps, { showSignupModal })(Header);
