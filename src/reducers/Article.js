const initialState = {
  reqError: null,
  loading: false,
  articles: [],
  article: null,
  paginationMeta: {}
};

/**
 * @class ArticleReducers
 */

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_BEGINS':
    case 'GET_ARTICLE_BEGINS':
      return { ...state, article: null, loading: true };
    case 'GET_ARTICLES_SUCCESSFUL':
      return {
        ...state,
        articles: action.articles,
        loading: false
      };
    case 'GET_ARTICLE_SUCCESSFUL':
      return {
        ...state,
        article: action.article,
        loading: false,
      };
    case 'GET_ARTICLE_FAIL':
    case 'GET_ARTICLES_FAIL':
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
    default:
      return state;
  }
};

export default articleReducer;
