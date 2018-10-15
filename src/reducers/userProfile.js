import { GET_PROFILE_BEGINS, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../actions/types';

const initialState = {
  user: {},
  error: {},
  loading: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_BEGINS:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
