import axios from 'axios';
import toastr from 'toastr';

import config from '../../config';
import {
  EDIT_PROFILE_BEGINS, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE
} from '../types';

export const editProfileBegins = () => ({
  type: EDIT_PROFILE_BEGINS
});

export const editProfileSuccess = user => ({
  type: EDIT_PROFILE_SUCCESS,
  user
});

export const editProfileFailure = error => ({
  type: EDIT_PROFILE_FAILURE,
  error
});

const editProfile = user => (dispatch) => {
  const formData = new FormData();
  formData.set('bio', user.bio);
  formData.set('firstname', user.firstname);
  formData.set('lastname', user.lastname);
  formData.append('image', user.profileImage);

  dispatch(editProfileBegins());
  return axios.put(`${config.apiUrl}/profiles/${user.username}`, formData)
    .then((result) => {
      const { message } = result.data;
      dispatch(editProfileSuccess(result.data));
      toastr.success(message);
    })
    .catch((err) => {
      dispatch(editProfileFailure(err.response.data));
      toastr.info(err.response.data);
    });
};

export default editProfile;
