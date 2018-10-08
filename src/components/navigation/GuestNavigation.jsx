import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModalForm from '../modals/Modal';


/**
 * @description class for userNavigation header
 *
 * @class GuestNavigation
 *
 * @extends {Component}
 */
class GuestNavigation extends Component {
  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const { showLoginModal, showSignupModal, modal } = this.props;
    return (
      <nav className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link"
            onClick={showLoginModal}
          >
            Login
          </Link>
          <ModalForm modal={modal} />
        </li>
        <li className="nav-item" id="signup">
          <Link
            to="#"
            className="nav-link"
            onClick={showSignupModal}
          >
            Sign Up
          </Link>
          <ModalForm modal={modal} />
        </li>
      </nav>
    );
  }
}

GuestNavigation.propTypes = {
  showLoginModal: PropTypes.func,
  showSignupModal: PropTypes.func,
  modal: PropTypes.shape({})
};

export default GuestNavigation;
