import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 *
 * @param {object} state - InitialState
 * @param {object} action - Action Object
 *
 * @returns {object} state CurrentState
 */
export default function articles(state = initialState.articles, action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles
      };

    default:
      return state;
  }
}
