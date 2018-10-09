import axios from 'axios';
import config from '../config';
import * as types from './actionTypes';

/**
 *
 * @param {Object} articles
 * @returns {Object} - Actions
 */
export const loadArticlesSuccess = articles => ({
  type: types.LOAD_ARTICLES_SUCCESS, articles
});

export const loadArticlePage = page => ({
  type: types.LOAD_ARTICLE_PAGE, page
});

export const articleError = error => ({
  type: types.ARTICLE_ERRORS,
  error
});


export const loadArticles = url => dispatch => axios(
  `${config.apiUrl}/${url}`
)
  .then((res) => {
    dispatch(loadArticlesSuccess(res.data));
    return res.data;
  }).catch((error) => {
    dispatch(articleError({
      status: error.response.status,
      data: error.response.data
    }));
  });
