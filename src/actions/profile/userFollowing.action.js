import axios from 'axios';

import config from '../../config';
import { GET_USER_FOLLOWING_SUCCESS, GET_USER_FOLLOWING_FAILURE } from '../types';

export const getUserFollowingSuccess = users => ({
  type: GET_USER_FOLLOWING_SUCCESS,
  users
});

export const getUserFollowingFailure = error => ({
  type: GET_USER_FOLLOWING_FAILURE,
  error
});

const userFollowing = username => dispatch => axios.get(
  `${config.apiUrl}/profiles/${username}/following`
)
  .then((result) => {
    dispatch(getUserFollowingSuccess(result.data));
  })
  .catch((err) => {
    dispatch(getUserFollowingFailure(err.response.data));
  });
export default userFollowing;
