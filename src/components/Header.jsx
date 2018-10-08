import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserNavigation from './navigation/UserNavigation';
import GuestNavigation from './navigation/GuestNavigation';
import { showLoginModal, showSignupModal } from '../actions/modal.action';


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
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/">Authors Haven</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            { auth
              ? <UserNavigation />
              : (
                <GuestNavigation
                  modal={modal}
                  showLoginModal={showModal}
                  showSignupModal={showModalSignup}
                />) }
          </ul>
        </div>
      </nav>
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
