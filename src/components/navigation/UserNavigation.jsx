import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoutAction from '../../actions/authentication/logoutAction';

/**
 * @description class for userNavigation header
 *
 * @class UserNavigation
 *
 * @extends {Component}
 */
export class UserNavigation extends Component {
  /**
   * @description handle user log out
   *
   * @param {Object} event logout event object
   *
   * @memberof Header
   *
   * @returns {undefined} calls logoutProps
   */
  onLogout = (event) => {
    const { logoutUser } = this.props;
    event.preventDefault();
    logoutUser();
  }

  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const { authUsername } = this.props;

    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            { authUsername }
          </a>
        </li>
        <li className="nav-item" id="login">
          <Link
            to="#"
            id="logout"
            className="nav-link"
            onClick={this.onLogout}
          >
            Logout
          </Link>
        </li>
      </ul>
    );
  }
}


UserNavigation.propTypes = {
  logoutUser: PropTypes.func,
  authUsername: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutAction()),
});

const mapStateToProps = state => ({
  authUsername: state.auth.user.username
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
