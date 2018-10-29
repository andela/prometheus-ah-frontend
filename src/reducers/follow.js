import {
  CREATE_FOLLOW_RELATIONSHIP,
  DELETE_FOLLOW_RELATIONSHIP,
  GET_ALL_FOLLOWERS,
  GET_ALL_FOLLOWING,
} from '../actions/types';


const initialState = {
  isFollowing: false,
  message: {},
  error: {},
  followers: {},
  following: {},
};

/**
 * @description carries out actions for the FOLLOW AND UNFOLLOW
 * @param {*} state
 * @param {*} action
 * @returns {*} object
 */
export default function followReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_FOLLOW_RELATIONSHIP:
      return { ...state, message: action.message, isFollowing: true };
    case DELETE_FOLLOW_RELATIONSHIP:
      return { ...state, message: action.message, isFollowing: false };
    case GET_ALL_FOLLOWERS:
      return { ...state, followers: action.data };
    case GET_ALL_FOLLOWING:
      return { ...state, following: action.data };
    default: return state;
  }
}
