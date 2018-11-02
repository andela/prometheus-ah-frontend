import { GET_USER_BOOKMARK_SUCCESS, GET_USER_BOOKMARK_FAILURE } from '../actions/types';

const initialState = {
  bookmarks: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: action.bookmarks,
      };
    case GET_USER_BOOKMARK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
