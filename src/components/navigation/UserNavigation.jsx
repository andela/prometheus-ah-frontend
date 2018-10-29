import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
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
    const { profile } = this.props;
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <a className="nav-link" href="/">Home</a>
        </li>
        <form className="form-inline mr-3 search">
          <i className="mdi mdi-magnify mdi-24px mr-2 d-none d-md-block" />
          <input
            className="form-control mr-sm-2 border-0"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <li className="nav-item nav-btn mr-4 bell">
          <i className="mdi mdi-bell-outline mdi-24px mr-2" />
        </li>
        <li className="nav-item dropdown">
          <img
            src={profile && profile.image ? profile.image : 'https://image.ibb.co/i48Wqf/paceholder.jpg'}
            className="img-fluid user-image rounded-circle dropdown-toggle"
            data-toggle="dropdown"
            alt=""
          />
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="/new-story" className="dropdown-item">Create Post</Link>
            <Link className="dropdown-item" to={routes.PROFILE_PAGE}>View Profile</Link>
            <div className="dropdown-divider" />
            <Link
              className="dropdown-item"
              to="#"
              id="logout"
              onClick={this.onLogout}
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    );
  }
}


UserNavigation.propTypes = {
  logoutUser: PropTypes.func,
  user: PropTypes.shape({}),
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(UserNavigation);
