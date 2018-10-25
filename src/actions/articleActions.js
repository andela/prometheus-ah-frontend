import axios from 'axios';
import toastr from 'toastr';
import * as actionTypes from './types';
import config from '../config';

/**
 * @class ArticleActions
 */
export default class Article {
  /**
  * Request to the API to create article
  *
  * @static
  *
  * @param {String} title The title of the article
  * @param {String} body The body of the article
  * @param {String} description The description of the article
  *
  * @returns {Object} dispatch object
  *
  * @memberof UserActions
  */
  static createArticle({
    title, body, description, tagList
  }) {
    return (dispatch) => {
      dispatch({ type: actionTypes.CREATE_ARTICLE_BEGINS });
      return axios.post(`${config.apiUrl}/articles/`,
        {
          title,
          body,
          description,
          tagList
        })
        .then((response) => {
          dispatch({
            type: actionTypes.CREATE_ARTICLE,
            article: response.data,
          });
          toastr.success(response.data.message);
          return response;
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: actionTypes.CREATE_ARTICLE_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' },
            });
          } else {
            dispatch({
              type: actionTypes.CREATE_ARTICLE_FAIL,
              payload: err.response.data,
            });
            toastr.error(err.response.data.message);
          }
          toastr.error(err.response.data.message);
          return (err.response.data.message);
        });
    };
  }

  /**
  * Request to the API to get list of articles
  *
  * @static
  * @returns {Object} dispatch object

  * @memberof ArticleActions
  */
  static fetchArticle() {
    return (dispatch) => {
      dispatch({ type: actionTypes.GET_ARTICLES_BEGINS });
      return axios.get(`${config.apiUrl}/articles`)
        .then((response) => {
          dispatch({
            type: actionTypes.GET_ARTICLES,
            articles: response.data.articles,
            likedArticle: response.data.likes,
            paginationMeta: response.data.articles.paginationMeta
          });
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: actionTypes.GET_ARTICLES_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
          } else {
            dispatch({
              type: actionTypes.GET_ARTICLES_FAIL,
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
      dispatch({ type: actionTypes.GET_ARTICLE_BEGINS });
      return axios.get(`${config.apiUrl}/articles/${slug}`)
        .then((response) => {
          dispatch({
            type: actionTypes.GET_ARTICLE,
            article: response.data.article,
          });
          return response;
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: actionTypes.GET_ARTICLE_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
          } else {
            dispatch({
              type: actionTypes.GET_ARTICLE_FAIL,
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
  * @param {string} user - username of user
  * @returns {Object} dispatch object

  * @memberof ArticleActions
  */
  static fetchUserArticle(user) {
    return (dispatch) => {
      dispatch({ type: actionTypes.GET_ARTICLES_BEGINS });
      return axios.get(`${config.apiUrl}/articles?user=${user}`)
        .then((response) => {
          dispatch({
            type: actionTypes.GET_ARTICLES,
            articles: response.data.articles,
            pageCount: response.data.paginationMeta.pageCount
          });
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: actionTypes.GET_ARTICLES_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
          } else {
            dispatch({
              type: actionTypes.GET_ARTICLES_FAIL,
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
  * @param {string} slug - id of article
  * @param {update} updates - article update
  * @returns {Object} dispatch object

  * @memberof ArticleActions
  */
  static editUserArticle(slug, updates) {
    return (dispatch) => {
      dispatch({ type: actionTypes.EDIT_ARTICLE_BEGINS });
      return axios.put(`${config.apiUrl}/articles/${slug}`,
        updates)
        .then((response) => {
          dispatch({
            type: actionTypes.EDIT_ARTICLE,
            article: response.data.article,
          });
          toastr.success(response.data.message);
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: actionTypes.EDIT_ARTICLE_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
            toastr.error(err.response.data.message);
          } else {
            dispatch({
              type: actionTypes.EDIT_ARTICLE_FAIL,
              payload: err.response.data.message
            });
            toastr.error(err.response.data.message);
          }
        });
    };
  }

  /**
  * Request to the API to get list of articles
  *
  * @static
  * @param {string} slug - id of article
  * @param {update} updates - article update
  * @returns {Object} dispatch object

  * @memberof ArticleActions
  */
  static deleteUserArticle(slug) {
    return (dispatch) => {
      dispatch({ type: actionTypes.DELETE_ARTICLE_BEGINS });
      return axios.delete(`${config.apiUrl}/articles/${slug}`)
        .then((response) => {
          dispatch({
            type: actionTypes.DELETE_ARTICLE,
            article: { message: response.data.message }
          });
          toastr.success(response.data.message);
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: actionTypes.DELETE_ARTICLE_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' }
            });
            toastr.error(err.response.data.message);
          } else {
            dispatch({
              type: actionTypes.DELETE_ARTICLE_FAIL,
              payload: err.response.data.message
            });
            toastr.error(err.response.data.message);
          }
        });
    };
  }

  /**
    * Request to the API to get featured articles
    *
    * @static
    * @returns {Object} dispatch object
    * @memberof ArticleActions
    */
  static fetchFeaturedArticles() {
    return (dispatch) => {
      dispatch({ type: 'GET_ARTICLES_BEGINS' });
      return axios.get(`${config.apiUrl}/featuredArticles`)
        .then((response) => {
          dispatch({
            type: 'GET_FEATURED_ARTICLES',
            featuredArticles: response.data.articles,
          });
        })
        .catch((err) => {
          dispatch({
            type: 'GET_FEATURED_ARTICLES_FAIL',
            payload: err.response.data.message
          });
        });
    };
  }

  /**
  * Request to the API to like an article
  *
  * @static
  * @param {string} slug - id of article
  * @returns {Object} dispatch object
  *
  * @memberof ArticleActions
  */
  static likeArticle(slug) {
    return (dispatch) => {
      const link = `/articles/${slug}/like`;
      return axios
        .post(`${config.apiUrl}${link}`)
        .then((response) => {
          if (response.status === 201) {
            dispatch({
              type: 'LIKE_ARTICLE_SUCCESS',
            });
          }
          return response;
        })
        .catch(() => {
          dispatch({
            type: 'LIKE_ARTICLE_FAILED',
          });
        });
    };
  }

  /**
* Request to the API to unlike an articles
*
* @static
* @param {string} slug - id of article
* @returns {Object} dispatch object
*
* @memberof ArticleActions
*/
  static unlikeArticle(slug) {
    return (dispatch) => {
      const link = `/articles/${slug}/unlike`;
      return axios
        .delete(`${config.apiUrl}${link}`)
        .then((response) => {
          dispatch({
            type: 'UNLIKE_ARTICLE_SUCCESS'
          });
          return response;
        })
        .catch(() => {
          dispatch({
            type: 'UNLIKE_ARTICLE_FAILED'
          });
        });
    };
  }

  /**
* Request to the API to get all likes for an article
*
* @static
* @param {string} slug - id of article
* @returns {Object} dispatch object
*
* @memberof ArticleActions
*/
  static articleLikesCount(slug) {
    return (dispatch) => {
      const link = `/articles/${slug}/like`;
      return axios
        .get(`${config.apiUrl}${link}`)
        .then((response) => {
          dispatch({
            type: 'LIKES_COUNT_SUCCESS',
            count: response.data.paginationMeta.totalCount
          });
          return response;
        })
        .catch(() => {
          dispatch({
            type: 'LIKES_COUNT_FAILED',
          });
          toastr.error('Sorry an unexpected error occured');
        });
    };
  }

  /**
* Request to the API to get a user like status for an article
*
* @static
* @param {string} slug - id of article
* @returns {Object} dispatch object
*
* @memberof ArticleActions
*/
  static articleLikeStatus(slug) {
    return (dispatch) => {
      const link = `/articles/${slug}/likes`;
      return axios
        .get(`${config.apiUrl}${link}`)
        .then((response) => {
          dispatch({
            type: 'LIKE_STATUS_SUCCESS',
            status: response.data.userLikes
          });
          return response;
        })
        .catch(() => {
          dispatch({
            type: 'LIKE_STATUS_FAILED',
          });
        });
    };
  }
}
