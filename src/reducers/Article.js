import * as actionTypes from '../actions/types';

const initialState = {
  reqError: null,
  loading: false,
  articles: [],
  article: null,
  featuredArticles: null,
  paginationMeta: {},
  articleLikes: 0,
  likeStatus: false
};

/**
 * @class ArticleReducers
 */

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ARTICLE_BEGINS:
      return { ...state, loading: true };
    case actionTypes.CREATE_ARTICLE:
      return {
        ...state,
        created: action.article,
      };
    case actionTypes.CREATE_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        reqError: action.payload
      };
    case actionTypes.CREATE_ARTICLE_REJECTED:
      return {
        ...state,
        reqError: action.payload,
        loading: false,
      };
    case actionTypes.GET_ARTICLES_BEGINS:
    case actionTypes.GET_ARTICLE_BEGINS:
      return { ...state, article: null, loading: true };
    case actionTypes.GET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        loading: false
      };

    case 'GET_FEATURED_ARTICLES':
      return {
        ...state,
        featuredArticles: action.featuredArticles,
        loading: false
      };

    case actionTypes.GET_ARTICLE:
      return {
        ...state,
        article: action.article,
        loading: false,
      };
    case actionTypes.GET_ARTICLE_FAIL:
    case actionTypes.GET_ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
        reqError: action.payload
      };
    case actionTypes.GET_ARTICLE_REJECTED:
    case actionTypes.GET_ARTICLES_REJECTED:
      return {
        ...state,
        loading: false,
        reqError: action.payload,
      };
    case actionTypes.EDIT_ARTICLE_BEGINS:
      return { ...state, loading: true };
    case actionTypes.EDIT_ARTICLE:
      return {
        ...state,
        article: {
          ...state.article,
          ...action.article
        },
        loading: false,
      };
    case actionTypes.EDIT_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        reqError: action.payload
      };
    case actionTypes.EDIT_ARTICLE_REJECTED:
      return {
        ...state,
        error: true,
        loading: false,
        reqError: action.payload,
      };
    case actionTypes.DELETE_ARTICLE_BEGINS:
      return { ...state, loading: true };
    case actionTypes.DELETE_ARTICLE:
      return {
        ...state,
        deleted: action.article,
        loading: false,
      };
    case actionTypes.DELETE_ARTICLE_FAIL:
      return { ...state, reqError: action.payload, loading: false };
    case actionTypes.DELETE_ARTICLE_REJECTED:
      return {
        ...state,
        loading: false,
        reqError: action.payload,
      };
    case 'LIKE_ARTICLE_SUCCESS':
      return {
        ...state
      };
    case 'LIKE_ARTICLE_FAILED':
      return {
        ...state
      };
    case 'UNLIKE_ARTICLE_SUCCESS':
      return {
        ...state
      };
    case 'UNLIKE_ARTICLE_FAILED':
      return {
        ...state
      };
    case 'LIKES_COUNT_SUCCESS':
      return {
        ...state,
        articleLikes: action.count
      };
    case 'LIKES_COUNT_FAILED':
      return {
        ...state,
      };
    case 'LIKE_STATUS_SUCCESS':
      return {
        ...state,
        likeStatus: action.status
      };
    case 'LIKE_STATUS_FAILED':
      return {
        ...state,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        likeStatus: false
      };
    default:
      return state;
  }
};

export default articleReducer;
