import axios from 'axios';

import config from '../../config';
import { GET_USER_FOLLOWERS_SUCCESS, GET_USER_FOLLOWERS_FAILURE } from '../types';

export const getUserFollowersSuccess = users => ({
  type: GET_USER_FOLLOWERS_SUCCESS,
  users
});

export const getUserFollowersFailure = error => ({
  type: GET_USER_FOLLOWERS_FAILURE,
  error
});

const userFollowers = username => dispatch => axios.get(
  `${config.apiUrl}/profiles/${username}/followers`
)
  .then((result) => {
    dispatch(getUserFollowersSuccess(result.data));
  })
  .catch((err) => {
    dispatch(getUserFollowersFailure(err.response.data));
  });

export default userFollowers;
