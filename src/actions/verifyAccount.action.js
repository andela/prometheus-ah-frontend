import toastr from 'toastr';
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
  .get(`${config.apiUrl}${routes.VERIFY_EMAIL}?emailToken=${token}`, token).then((res) => {
    const { message } = res.data;
    dispatch(emailVerifySuccessToken({ token }));
    dispatch(emailVerifySuccess({ message }));
    toastr.success(message);
  }).catch((err) => {
    const error = err.response.data.message;
    toastr.error(error);
    dispatch(emailVerifyFailed(err.response.data.message));
  });
