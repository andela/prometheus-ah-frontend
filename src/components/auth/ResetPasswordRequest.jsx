import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { startResetPassword } from '../../actions/authentication/resetPassword';
import resetPasswordValidations from '../../validations/resetPasswordValidation';
import routes from '../../constants/routes';
import TextField from '../common/TextField';


/**
 * sign in an existing user
 *
 * @class ResetPasswordRequest
 * @param {event} event

 * @extends {Component}
 */
class ResetPasswordRequest extends Component {
  state = {
    email: '',
    emailValid: false,
    error: {},
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { error, hasErrors } = resetPasswordValidations.emailInputValidation(
      this.state
    );
    this.setState(() => ({
      error
    }));
    if (!hasErrors) {
      const { email } = this.state;
      const { resetPasswordRequest } = this.props;
      resetPasswordRequest(email)
        .then((payload) => {
          if (payload) {
            this.setState(() => ({
              emailValid: true
            }));
          }
        })
    }
  };

  /**
   * renders component to DOM
   *
   * @memberof PasswordReset
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { error, email, emailValid } = this.state;
    if (emailValid) {
      return <Redirect to={routes.LANDING} />;
    }
    return (
      <div className="form-gap">
        <div className="container">
          <div className="form-row text-center justify-content-center">
            <div className="col-md-6 col-md-offset-4 border rounded">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="text-center">
                    <h3>
                      <i className="fa fa-lock fa-4x" />
                    </h3>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>Enter Your email address to get a password reset link</p>
                    <div className="panel-body">
                      <form
                        id="register-form"
                        autoComplete="off"
                        className="form"
                        method="post"
                        onSubmit={this.onSubmit}
                      >
                        <div className="form-group">
                          <TextField
                            error={error.email}
                            onChange={this.onChange}
                            value={email}
                            placeholder="enter your email"
                            type="email"
                            className="form-control form-input"
                            field="email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="recover-submit"
                            className="btn btn-lg btn-block login-btn mt-4"
                            value="Send email verification link"
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResetPasswordRequest.defaultProps = {
  resetPasswordRequest: () => {}
};

ResetPasswordRequest.propTypes = {
  resetPasswordRequest: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  resetPasswordRequest: bindActionCreators(startResetPassword, dispatch),
});

export default connect(
  undefined,
  mapDispatchToProps
)(ResetPasswordRequest);
