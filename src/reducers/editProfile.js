import { EDIT_PROFILE_BEGINS, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE } from '../actions/types';

const initialState = {
  user: {},
  error: {},
  loading: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_BEGINS:
      return {
        ...state,
        loading: true,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
