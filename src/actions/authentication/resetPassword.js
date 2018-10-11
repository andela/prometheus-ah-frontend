import axios from 'axios';
import toastr from 'toastr';
import {
  RESET_PASSWORD_REQUEST_SUCCESSFUL,
  RESET_PASSWORD_REQUEST_FAILED,
  RESET_PASSWORD_UPDATE_SUCCESSFUL,
  RESET_PASSWORD_UPDATE_FAILED
} from '../types';
import config from '../../config';

export const resetPasswordSuccess = email => ({
  type: RESET_PASSWORD_REQUEST_SUCCESSFUL,
  email
});

export const resetPasswordFailed = error => ({
  type: RESET_PASSWORD_REQUEST_FAILED,
  error
});

export const startResetPassword = email => (dispatch) => {
  const userEmail = { user: { email } };
  const link = '/users/reset-password';
  return axios
    .post(`${config.apiUrl}${link}`, userEmail)
    .then((response) => {
      if (response) {
        const { message } = response.data;
        toastr.success(message);
        dispatch(resetPasswordSuccess(email));
        return response;
      }
    })
    .catch((error) => {
      const { message } = error.response.data;
      toastr.error(message, { timeOut: 3000 });
      dispatch(resetPasswordFailed(message));
    });
};

export const resetPasswordUpdateSuccess = ({
  password,
  password_confirmation, // eslint-disable-line
  passwordtoken
}) => ({
  type: RESET_PASSWORD_UPDATE_SUCCESSFUL,
  password,
  password_confirmation,
  passwordtoken
});

export const resetPasswordUpdateFailed = error => ({
  type: RESET_PASSWORD_UPDATE_FAILED,
  error
});

export const startResetPasswordUpdate = ({
  password,
  password_confirmation, // eslint-disable-line
  passwordtoken
}) => (dispatch) => {
  const userDetails = {
    user: { password, password_confirmation, passwordtoken }
  };
  const link = '/users/change-password';
  return axios
    .post(`${config.apiUrl}${link}`, userDetails)
    .then((response) => {
      if (response) {
        const { message } = response.data;
        dispatch(
          resetPasswordUpdateSuccess({
            password,
            password_confirmation,
            passwordtoken
          })
        );
        toastr.success(message);
        return response;
      }
    })
    .catch((error) => {
      const { message } = error.response.data;
      toastr.error(message);
      dispatch(resetPasswordUpdateFailed(message));
    });
};
