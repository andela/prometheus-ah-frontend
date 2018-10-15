import { GET_USER_FOLLOWERS_SUCCESS, GET_USER_FOLLOWERS_FAILURE } from '../actions/types';

const initialState = {
  user: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_FOLLOWERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
