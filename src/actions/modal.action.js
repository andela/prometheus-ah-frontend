import { SHOW_SIGNUP_MODAL, HIDE_SIGNUP_MODAL } from './types';

export const showSignupModal = () => dispatch => dispatch({
  type: SHOW_SIGNUP_MODAL
});

export const hideSignupModal = () => dispatch => dispatch({
  type: HIDE_SIGNUP_MODAL
});
