import alertify from 'alertify.js';
import axios from 'axios';
import {
  VERIFY_EMAIL_SUCCESSFUL,
  VERIFY_EMAIL_FAILED,
  VERIFY_EMAIL_SUCCESSFUL_TOKEN
} from './types';
import routes from '../constants/routes';
import config from '../config';

export const emailVerifySuccessToken = token => ({
  type: VERIFY_EMAIL_SUCCESSFUL_TOKEN,
  token
});

export const emailVerifySuccess = success => ({
  type: VERIFY_EMAIL_SUCCESSFUL,
  success
});

export const emailVerifyFailed = error => ({
  type: VERIFY_EMAIL_FAILED,
  error
});


export const startVerifyEmail = token => dispatch => axios
  .get(`${config.apiUrl}/api${routes.VERIFY_EMAIL}?emailToken=${token}`, token).then((res) => {
    const { message } = res.data;
    dispatch(emailVerifySuccessToken({ token }));
    dispatch(emailVerifySuccess({ message }));
    alertify.delay(5000);
    alertify.logPosition('top right');
    alertify.success(message);
  }).catch((err) => {
    const error = err.response.data.message;
    alertify.delay(5000);
    alertify.logPosition('top right');
    alertify.error(error);
    dispatch(emailVerifyFailed(err.response.data.message));
  });
