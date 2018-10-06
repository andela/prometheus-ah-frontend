import axios from 'axios';
import config from '../config';

/**
 * @class ArticleActions
 */
export default class Article {
  /**
  * Request to the API to get list of articles
  *
  * @static
  * @returns {Object} dispatch object

  * @memberof ArticleActions
  */
  static fetchArticle() {
    return (dispatch) => {
      dispatch({ type: 'GET_ARTICLES_BEGINS' });
      return axios.get(`${config.apiUrl}/articles`)
        .then((response) => {
          dispatch({
            type: 'GET_ARTICLES_SUCCESSFUL',
            articles: response.data.articles,
            paginationMeta: response.data.articles.paginationMeta
          });
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: 'GET_ARTICLES_REJECTED',
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
          } else {
            dispatch({
              type: 'GET_ARTICLES_FAIL',
              payload: err.response.data.message
            });
          }
        });
    };
  }

  /**
  * Request to the API to get list of articles
  *
  * @static
  * @param {*} slug
  * @returns {Object} dispatch object

  * @memberof ArticleActions
  */
  static fetchSingleArticle(slug) {
    return (dispatch) => {
      dispatch({ type: 'GET_ARTICLE_BEGINS' });
      return axios.get(`${config.apiUrl}/articles/${slug}`)
        .then((response) => {
          dispatch({
            type: 'GET_ARTICLE_SUCCESSFUL',
            article: response.data.article,
          });
          return response;
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: 'GET_ARTICLE_REJECTED',
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
          } else {
            dispatch({
              type: 'GET_ARTICLE_FAIL',
              payload: err.response.data.message
            });
          }
        });
    };
  }
}
