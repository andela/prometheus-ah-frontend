import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserNavigation from './navigation/UserNavigation';
import GuestNavigation from './navigation/GuestNavigation';
import { showLoginModal, showSignupModal } from '../actions/modal.action';
import appLogo from '../images/logo.png';


/**
 * @description class for app header
 *
 * @class Header
 *
 * @extends {Component}
 */
export class Header extends Component {
  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const {
      auth, modal, showModal, showModalSignup
    } = this.props;
    return (
      <div className="sticky-top main-navbar">
        <nav className="navbar navbar-expand-sm navbar-light bg-light main-nav">
          <a className="navbar-brand" href="/">
            <img className="logo" src={appLogo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            { auth
              ? <UserNavigation />
              : (
                <GuestNavigation
                  modal={modal}
                  showLoginModal={showModal}
                  showSignupModal={showModalSignup}
                />) }
          </div>
        </nav>
        <hr className="my-0 nav-divider" />
        <nav className="navbar container bg-light categories">
          <a className="nav-link" href="#">Science</a>
          <a className="nav-link" href="#">Technology</a>
          <a className="nav-link" href="#">Nature</a>
          <a className="nav-link" href="#">Music</a>
          <a className="nav-link" href="#">Religion</a>
          <a className="nav-link" href="#">Business</a>
          <a className="nav-link" href="#">Education</a>
          <a className="nav-link" href="#">Art</a>
          <a className="nav-link" href="#">Relationship</a>
          <a className="nav-link" href="#">Food</a>
          <a className="nav-link" href="#">Health</a>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.bool,
  modal: PropTypes.shape({}),
  showModal: PropTypes.func,
  showModalSignup: PropTypes.func
};

const mapStateToProps = state => ({
  modal: state.modal,
  auth: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showLoginModal()),
  showModalSignup: () => dispatch(showSignupModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
