import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from './common/TextField';
import TextArea from './common/TextArea';
import ErrorAlertNotification from './common/ErrorAlertNotification';

import EditProfileValidate from '../middlewares/EditProfileValidate';

/**
 * @EditProfileForm page
 */
export class EditProfileForm extends Component {
  state = {
    image: '',
    firstname: '',
    lastname: '',
    username: '',
    bio: '',
    profileImage: null,
    errors: {},
  };

  /**
   * componentDidMount
   *@param {object} event
   * @return {void}
   */
  componentDidMount() {
    const { profile } = this.props;
    this.setState({
      image: profile.image,
      firstname: profile.firstname,
      lastname: profile.lastname,
      bio: profile.bio,
      username: profile.username,
    });
  }

  /**
   * onChange
   *@param {object} event
   * @return {void}
   */
  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  /**
   * onSubmit
   *@param {object} event
   * @return {void}
   */
  onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      const { editProfile, history } = this.props;
      const {
        image, firstname, lastname, bio, profileImage, username
      } = this.state;
      const user = {
        image,
        firstname,
        lastname,
        bio,
        profileImage,
        username
      };
      editProfile(user, history.push('/profiles'));
    }
  }

  /**
   * onSubmit
   *@param {object} event
   * @return {void}
   */
  fileChangedHandler = (event) => {
    this.setState({ profileImage: event.target.files[0] });
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        $('#myimage').attr('src', e.target.result); //eslint-disable-line
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  /**
   * isValid
   * @returns {*} - state
   */
  isValid() {
    const { errors, isValid } = EditProfileValidate.InputValidation(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * render
   *
   * @return {void}
   */
  render() {
    const {
      errors, image, firstname, lastname, bio
    } = this.state;

    const { error } = this.props;

    return (
      <form onSubmit={this.onSubmit} className="form-horizontal">
        <div className="panel panel-default">
          {
            (error && error.message) ? <ErrorAlertNotification errors={error.message} /> : ''
          }
          <div className="panel-body">
            <div className="form-group">
              <div className="container profile-img form-group text-center">
                <img id="myimage" src={image} className="img-circle profile-avatar image"
                  alt="User avatar"
                />
                <div className="overlay">
                  <button type="button" className="icon" title="User Profile"
                    onClick={() => this.fileInput.click()}
                  >
                    <i className="fas fa-camera-retro" />
                  </button>
                </div>
              </div>
              <input className="hideInput" type="file" name="profileImage"
                id="profileImage" onChange={this.fileChangedHandler}
                ref={(fileInput) => { this.fileInput = fileInput; }} accept="image/*"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <TextField
                error={errors.firstname}
                label="First Name"
                onChange={this.onChange}
                value={firstname}
                field="firstname"
                placeholder="enter your first name"
                id="firstname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <TextField
                error={errors.lastname}
                label="Last Name"
                onChange={this.onChange}
                value={lastname}
                field="lastname"
                placeholder="enter your last name"
                id="lastname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <TextArea
                error={errors.bio}
                label="Bio"
                onChange={this.onChange}
                value={bio}
                field="bio"
                placeholder="enter bio here..."
              />
            </div>
          </div>
          <Link to="{routes.PROFILE_PAGE}">
            <button className="btn btn-secondary" type="button">Cancel</button>
          </Link>
          &nbsp;
          <button id="register" className="btn btn-danger" type="submit">Save Changes</button>
        </div>
      </form>
    );
  }
}

EditProfileForm.propTypes = {
  profile: PropTypes.shape({
  }).isRequired,
  editProfile: PropTypes.func.isRequired,
  error: PropTypes.shape({
  }),
  history: PropTypes.shape({
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.editProfile.error
});

export default connect(mapStateToProps, null)(EditProfileForm);
