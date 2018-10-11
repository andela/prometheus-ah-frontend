import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { startResetPassword } from '../actions/authentication/resetPassword';

/**
 * @class Modal
 */
class ResetPassword extends Component {
  onClick = () => {
    const { resetEmail, resetPasswordRequest } = this.props;
    if (resetEmail) {
      resetPasswordRequest(resetEmail);
    }
  }

  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { resetEmail } = this.props;
    const message = `A password reset link has been sent to ${resetEmail}, Click`;
    return (
      <div>
        <div>
          {resetEmail ? (
            <div
              className="alert alert-success alert-dismissible fade show reset-alert"
              role="alert"
            >
              <p className="mb-0">
                {message}
                {' '}
                <Link to="#" className="alert-link" onClick={this.onClick}>Here</Link>
                {' '}
                to get a new password reset link
              </p>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

ResetPassword.defaultProps = {
  resetPasswordRequest: () => {},
};

ResetPassword.propTypes = {
  resetPasswordRequest: PropTypes.func,
  resetEmail: PropTypes.string,
};
const mapStateToProps = state => ({
  resetEmail: state.passwordreset.email
});

const mapDispatchToProps = dispatch => ({
  resetPasswordRequest: bindActionCreators(startResetPassword, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
