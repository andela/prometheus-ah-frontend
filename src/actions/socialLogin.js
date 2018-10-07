import axios from 'axios';
import Cookies from 'cookies-js';
import { SOCIAL_LOGIN_ERROR, SET_CURRENT_USER } from './types';
import config from '../config';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});


export const socialLoginAction = (code, socialLogin) => dispatch => axios.get(
  `${config.apiUrl}/users/login/${socialLogin}/callback?code=${code}`
).then((response) => {
  const { token } = response.data.user;
  Cookies.set('jwt_token', token);
  dispatch(setCurrentUser(response.data.user));
  return response;
}).catch((error) => {
  dispatch({
    type: SOCIAL_LOGIN_ERROR,
    error: error.response.data,
  });
  return error;
});
