import {
  RESET_PASSWORD_REQUEST_SUCCESSFUL,
  RESET_PASSWORD_REQUEST_FAILED,
  RESET_PASSWORD_UPDATE_SUCCESSFUL,
  RESET_PASSWORD_UPDATE_FAILED
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  const { type, error, email } = action;
  switch (type) {
    case RESET_PASSWORD_REQUEST_SUCCESSFUL:
      return {
        ...state,
        email
      };
    case RESET_PASSWORD_REQUEST_FAILED:
      return {
        ...state,
        error
      };
    case RESET_PASSWORD_UPDATE_SUCCESSFUL:
      return {
        ...state
      };
    case RESET_PASSWORD_UPDATE_FAILED:
      return {
        ...state,
        error
      };
    default:
      return state;
  }
};
