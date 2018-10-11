import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { startResetPasswordUpdate } from '../../actions/authentication/resetPassword';
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
export class ResetPasswordUpdate extends Component {
  state = {
    password: '',
    password_confirmation: '',
    passwordtoken: '',
    passwordUpdated: false,
    error: {}
  };

  /**
   * @description sets the passwordtoken
   *
   * @function getDerivedStateFromProps
   *
   * @param {object} nextProps
   *
   * @returns {null} update the state
   */
  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps;
    if (location) {
      const passwordtoken = location.search.split('=')[1];

      return { passwordtoken };
    }

    return null;
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const {
      error,
      hasErrors
    } = resetPasswordValidations.passwordInputValidation(this.state);
    this.setState(() => ({
      error
    }));
    if (!hasErrors) {
      const { password, password_confirmation, passwordtoken } = this.state; // eslint-disable-line
      const { resetPasswordUpdate } = this.props;
      resetPasswordUpdate({
        password,
        password_confirmation,
        passwordtoken
      })
        .then((payload) => {
          if (payload) {
            this.setState(() => ({
              passwordUpdated: true
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
    const {
      error,
      password,
      password_confirmation, // eslint-disable-line
      passwordUpdated,
    } = this.state;

    const { location } = this.props;
    const passwordtoken = location.search.split('=')[1];

    if (!passwordtoken || passwordUpdated) {
      return <Redirect to={routes.LANDING} />;
    }

    return (
      <div className="container py-5 form-gap form-margin">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h4 className="modal-title">Enter Password</h4>
                  </div>
                  <div className="card-body">
                    <form
                      className="form mt-2"
                      autoComplete="off"
                      id="formLogin"
                      method="post"
                      onSubmit={this.onSubmit}
                    >
                      <div className="form-group password-input">
                        <TextField
                          error={error.password}
                          onChange={this.onChange}
                          value={password}
                          placeholder="enter your password"
                          type="password"
                          className="form-control form-input"
                          field="password"
                        />
                      </div>
                      <div className="form-group password-input">
                        <TextField
                          error={error.password_confirmation}
                          onChange={this.onChange}
                          value={password_confirmation} // eslint-disable-line
                          placeholder="confirm your password"
                          type="password"
                          className="form-control form-input"
                          field="password_confirmation"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block btn-update login-btn"
                        id="btnLogin"
                      >
                        Reset Password
                      </button>
                    </form>
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

ResetPasswordUpdate.defaultProps = {
  resetPasswordUpdate: () => {}
};

ResetPasswordUpdate.propTypes = {
  resetPasswordUpdate: PropTypes.func,
  location: PropTypes.shape({}).isRequired
};

const mapDispatchToProps = dispatch => ({
  resetPasswordUpdate: bindActionCreators(startResetPasswordUpdate, dispatch)
});

export default connect(
  undefined,
  mapDispatchToProps
)(ResetPasswordUpdate);
