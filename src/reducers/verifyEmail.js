import {
  VERIFY_EMAIL_SUCCESSFUL,
  VERIFY_EMAIL_FAILED,
  VERIFY_EMAIL_SUCCESSFUL_TOKEN
} from '../actions/types';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VERIFY_EMAIL_SUCCESSFUL_TOKEN:
      return {
        token: action.token
      };
    case VERIFY_EMAIL_SUCCESSFUL:
      return {
        success: action.success
      };
    case VERIFY_EMAIL_FAILED:
      return {
        error: action.error
      };
    default:
      return state;
  }
};
