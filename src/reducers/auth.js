import isEmpty from 'is-empty';
import {
  SET_CURRENT_USER,
  SIGN_UP_ERRORS,
  SIGN_UP_SUCCESS,
  DELETE_ERROR_MESSAGE
} from '../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case SIGN_UP_ERRORS:
      return {
        isAuthenticated: false,
        error: action.error
      };
    case SIGN_UP_SUCCESS:
      return {
        success: action.success
      };
    case DELETE_ERROR_MESSAGE:
      return {
        error: {}
      };
    default: return state;
  }
};
