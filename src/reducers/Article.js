const initialState = {
  reqError: null,
  loading: false,
  articles: [],
  article: null,
  featuredArticles: null,
  paginationMeta: {}
};

/**
 * @class ArticleReducers
 */

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE_BEGINS':
      return { ...state, loading: true };

    case 'CREATE_ARTICLE':
      return {
        ...state,
        created: action.article,
      };

    case 'CREATE_ARTICLE_FAIL':
      return {
        ...state,
        loading: false,
        reqError: action.payload
      };

    case 'CREATE_ARTICLE_REJECTED':
      return {
        ...state, reqError: action.payload, loading: false,
      };

    case 'GET_ARTICLES_BEGINS':
    case 'GET_ARTICLE_BEGINS':
      return { ...state, article: null, loading: true };

    case 'GET_ARTICLES':
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

    case 'GET_ARTICLE':
      return {
        ...state,
        article: action.article,
        loading: false,
      };

    case 'GET_ARTICLE_FAIL':
    case 'GET_ARTICLES_FAIL':
    case 'GET_FEATURED_ARTICLES_FAIL':
      return {
        ...state, loading: false, reqError: action.payload
      };

    case 'GET_ARTICLE_REJECTED':
    case 'GET_ARTICLES_REJECTED':
      return {
        ...state,
        loading: false,
        reqError: action.payload,
      };

    case 'EDIT_ARTICLE_BEGINS':
      return { ...state, loading: true };

    case 'EDIT_ARTICLE':
      return {
        ...state,
        article: { ...state.article, ...action.article },
        loading: false,
      };

    case 'EDIT_ARTICLE_FAIL':
      return {
        ...state, loading: false, reqError: action.payload
      };

    case 'EDIT_ARTICLE_REJECTED':
      return {
        ...state,
        error: true,
        loading: false,
        reqError: action.payload,
      };

    case 'DELETE_ARTICLE_BEGINS':
      return { ...state, loading: true };

    case 'DELETE_ARTICLE':
      return {
        ...state,
        deleted: action.article,
        loading: false,
      };

    case 'DELETE_ARTICLE_FAIL':
      return { ...state, reqError: action.payload, loading: false };

    case 'DELETE_ARTICLE_REJECTED':
      return {
        ...state,
        loading: false,
        reqError: action.payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
