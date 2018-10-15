import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import editProfileAction from '../actions/profile/editProfile.action';

import EditProfileForm from '../components/EditProfileForm';

/**
 * @EditProfilePage page
 */
class EditProfilePage extends Component {
  /**
   * render
   *
   * @return {void}
   */
  render() {
    const {
      location: { state: { profile = {} } = {} } = {},
      editProfile,
      history,
      user: { isAuthenticated = {} }
    } = this.props;

    if (!isAuthenticated) {
      history.push('/');
    }

    return (
      <div>
        <br />
        <div className="row">
          <div className="col-sm-3" />
          <div className="container col-sm-6 profile-padding">
            <EditProfileForm
              profile={profile}
              editProfile={editProfile}
              history={history}
            />
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({
  editProfile: user => dispatch(editProfileAction(user)),
});

EditProfilePage.propTypes = {
  editProfile: PropTypes.func.isRequired,
  location: PropTypes.shape({
  }).isRequired,
  history: PropTypes.shape({
  }).isRequired,
  user: PropTypes.shape({
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
