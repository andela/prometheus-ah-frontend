import {
  GET_FEATURED_AUTHOR,
  GET_FEATURED_AUTHOR_FAIL
} from '../actions/types';

const initialState = {
  featuredAuthor: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_AUTHOR:
      return {
        ...state,
        featuredAuthor: action.featuredAuthor
      };

    case GET_FEATURED_AUTHOR_FAIL:
      return {
        ...state,
      };

    default: return state;
  }
};
