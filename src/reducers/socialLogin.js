import { SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_ERROR } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  error: {},
};

/**
 * @description carries out actions for the social login
 * @param {*} state
 * @param {*} action
 * @returns {*} object
 */
export default function socialLoginReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SOCIAL_LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case SOCIAL_LOGIN_ERROR:
      return { ...state, error: action.error };
    default: return state;
  }
}
