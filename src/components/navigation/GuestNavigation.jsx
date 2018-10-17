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
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <a className="nav-link" href="/">Home</a>
        </li>
        <form className="form-inline mr-3">
          <i className="mdi mdi-magnify mdi-24px mr-2 d-none d-md-block" />
          <input
            className="form-control mr-sm-2 border-0"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <li className="nav-item nav-btn mr-4" id="login">
          <Link
            to="#"
            className="nav-link login-link"
            onClick={showLoginModal}
          >
            Login
          </Link>
          <ModalForm modal={modal} />
        </li>
        <li className="nav-item nav-btn" id="signup">
          <Link
            to="#"
            className="nav-link register-link"
            onClick={showSignupModal}
          >
            Register
          </Link>
          <ModalForm modal={modal} />
        </li>
      </ul>
    );
  }
}

GuestNavigation.propTypes = {
  showLoginModal: PropTypes.func,
  showSignupModal: PropTypes.func,
  modal: PropTypes.shape({})
};

export default GuestNavigation;
