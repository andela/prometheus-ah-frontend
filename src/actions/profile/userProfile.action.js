import axios from 'axios';

import config from '../../config';
import { GET_PROFILE_BEGINS, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../types';

export const userProfileBegins = () => ({
  type: GET_PROFILE_BEGINS
});

export const profileSuccess = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload
});

export const profileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  error
});

const userProfile = username => (dispatch) => {
  dispatch(userProfileBegins());
  return axios.get(`${config.apiUrl}/profiles/${username}`)
    .then((result) => {
      dispatch(profileSuccess(result.data));
    })
    .catch((err) => {
      dispatch(profileFailure(err.response.data));
    });
};

export default userProfile;
