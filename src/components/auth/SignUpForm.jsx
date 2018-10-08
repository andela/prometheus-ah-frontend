import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '../common/TextField';
import SignUpInputValidation from '../../middlewares/SignUpInputValidate';
import ErrorAlertNotification from '../common/ErrorAlertNotification';
import { userSignUpRequest, deleteErrorMessage } from '../../actions/index';
import googleLogo from '../../images/google.png';
import facebookLogo from '../../images/facebook-logo.png';

/**
 * @class SignUpForm
 */
export class SignUpForm extends Component {
    state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      success: {},
      done: false,
      isLoading: false,
      error: {},
    };


  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const error = Object.assign({}, errors);
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value, error
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value

      });
    }
  }

  handleDelete = () => {
    this.props.deleteErrorMessage();
    this.setState({
      password: '',
      password_confirmation: '',
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { userSignUpRequest } = this.props;
      userSignUpRequest(this.state);
    }
  }

  /**
   * isValid
   * @returns {*} - state
   */
  isValid() {
    const { errors, isValid } = SignUpInputValidation.InputValidation(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  render() {
    const { auth } = this.props;
    if (auth) {
      return <Redirect to="/users/login" />;
    }
    const {
      errors, email, username, password, password_confirmation // eslint-disable-line
    } = this.state;

    const { error } = this.props;

    const form = (
      <div className="card">
        <div>
          <small className="form-text login-label">Welcome to Authors Haven</small>
          <small className="form-text login-label-2">You can join the community by filling this form</small>
        </div>
        <div className="card-body">
          {
                (error && error.message) ? (
                  <ErrorAlertNotification
                    errors={error.message}
                    onClick={this.handleDelete}
                  />
                ) : ''
              }
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <TextField
                  error={errors.username}
                  onChange={this.onChange}
                  value={username}
                  placeholder="username"
                  field="username"
                  id="myusername"
                />
              </div>
              <div className="form-group col-md-6">
                <TextField
                  error={errors.email}
                  onChange={this.onChange}
                  value={email}
                  placeholder="email"
                  field="email"
                  id="myemail"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <TextField
                  error={errors.password}
                  onChange={this.onChange}
                  value={password}
                  type="password"
                  placeholder="password"
                  field="password"
                  id="mypassword"
                />
              </div>
              <div className="form-group col-md-6">
                <TextField
                  error={errors.password_confirmation}
                  onChange={this.onChange}
                  value={password_confirmation} // eslint-disable-line
                  type="password"
                  placeholder="confirm password"
                  field="password_confirmation"
                  id="mypassword_confirmation"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <button id="register" type="button" className="btn login-btn" onClick={this.onSubmit}>
                      SIGN UP
                </button>
              </div>
            </div>
            <hr />
            <div>
              <small className="form-text">sign up with one of these services</small>
              <br />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <button type="submit" className="btn  social-submit-btn">
                  <img className="social-submit-logo" alt="facebooklogo" src={facebookLogo} /> 
                  FACEBOOK
                </button>
              </div>
              <div className="form-group col-md-6">
                <button type="submit" className="btn social-submit-btn">
                  <img className="social-submit-logo" alt="facebooklogo" src={googleLogo} /> 
                  GOOGLE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
    return (
      <div>
        {form}
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.auth.error,
  auth: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { userSignUpRequest, deleteErrorMessage })((SignUpForm));
