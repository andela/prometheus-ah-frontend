import articleReducer from '../../reducers/Article';

const initialState = {
  reqError: null,
  loading: false,
  articles: [],
  article: null,
  paginationMeta: {},
  featuredArticles: null,
  articleLikes: 0,
  likeStatus: false
};
const article = {
  title: 'new article',
  description: 'new article begins',
  body: 'create article'
};
describe('Article reducer', () => {
  it('should return default state when nothing is passed in create article', (done) => {
    const action = {
      type: ''
    };
    const expected = {
      reqError: null,
      loading: false,
      articles: [],
      article: null,
      featuredArticles: null,
      paginationMeta: {},
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update state when CREATE_ARTICLE_BEGINS is passed', (done) => {
    const action = {
      type: 'CREATE_ARTICLE_BEGINS'
    };
    const expected = {
      article: null,
      articles: [],
      loading: true,
      paginationMeta: {},
      reqError: null,
      featuredArticles: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when CREATE_ARTICLE is passed', (done) => {
    const action = {
      type: 'CREATE_ARTICLE',
      article
    };
    const expected = {
      article: null,
      articles: [],
      created: {
        body: 'create article',
        description: 'new article begins',
        title: 'new article'
      },
      featuredArticles: null,
      loading: false,
      paginationMeta: {},
      reqError: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when CREATE_ARTICLE_FAIL is passed', (done) => {
    const action = {
      type: 'CREATE_ARTICLE_FAIL',
      payload: { message: 'request fail' }
    };
    const expected = {
      article: null,
      articles: [],
      loading: false,
      featuredArticles: null,
      paginationMeta: {},
      articleLikes: 0,
      likeStatus: false,
      reqError: { message: 'request fail' }
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when CREATE_ARTICLE_REJECTED is passed', (done) => {
    const action = {
      type: 'CREATE_ARTICLE_REJECTED',
      article
    };
    const expected = {
      article: null,
      articles: [],
      loading: false,
      paginationMeta: {},
      reqError: undefined,
      featuredArticles: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update state when GET_ARTICLE_BEGINS is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE_BEGINS'
    };
    const expected = {
      article: null,
      articles: [],
      loading: true,
      paginationMeta: {},
      reqError: null,
      featuredArticles: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update state when GET_ARTICLES_BEGINS is passed', (done) => {
    const action = {
      type: 'GET_ARTICLES_BEGINS'
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: null,
      loading: true,
      paginationMeta: {},
      reqError: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLES is passed', (done) => {
    const action = {
      type: 'GET_ARTICLES',
      article
    };
    const expected = {
      article: null,
      articles: undefined,
      featuredArticles: null,
      reqError: null,
      loading: false,
      paginationMeta: {},
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLES_FAIL is passed', (done) => {
    const action = {
      type: 'GET_ARTICLES_FAIL',
      article
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: null,
      reqError: undefined,
      loading: false,
      paginationMeta: {},
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLES_REJECTED is passed', (done) => {
    const action = {
      type: 'GET_ARTICLES_REJECTED',
      article
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: null,
      loading: false,
      paginationMeta: {},
      reqError: undefined,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update state when GET_ARTICLE_BEGINS is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE_BEGINS'
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: null,
      loading: true,
      paginationMeta: {},
      reqError: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLE is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE',
      article
    };
    const expected = {
      article: {
        body: 'create article',
        description: 'new article begins',
        title: 'new article'
      },
      articles: [],
      featuredArticles: null,
      loading: false,
      paginationMeta: {},
      reqError: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLE_FAIL is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE_FAIL',
      article
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: null,
      paginationMeta: {},
      loading: false,
      reqError: undefined,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLE_REJECTED is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE_REJECTED',
      article
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: null,
      paginationMeta: {},
      loading: false,
      reqError: undefined,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update state when EDIT_ARTICLE_BEGINS is passed', (done) => {
    const action = {
      type: 'EDIT_ARTICLE_BEGINS'
    };
    const expected = {
      article: null,
      articles: [],
      loading: true,
      paginationMeta: {},
      reqError: null,
      featuredArticles: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });

  it('should update the state when GET_FEATURED_ARTICLES is passed', (done) => {
    const action = {
      type: 'GET_FEATURED_ARTICLES',
      featuredArticles: []
    };
    const expected = {
      article: null,
      articles: [],
      featuredArticles: [],
      loading: false,
      paginationMeta: {},
      reqError: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when EDIT_ARTICLE is passed', (done) => {
    const action = {
      type: 'EDIT_ARTICLE',
      article
    };
    const expected = {
      article: {
        body: 'create article',
        description: 'new article begins',
        title: 'new article'
      },
      articles: [],
      featuredArticles: null,
      loading: false,
      paginationMeta: {},
      reqError: null,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when EDIT_ARTICLE_FAIL is passed', (done) => {
    const action = {
      type: 'EDIT_ARTICLE_FAIL',
      article
    };
    const expected = {
      article: null,
      articles: [],
      loading: false,
      featuredArticles: null,
      paginationMeta: {},
      reqError: undefined,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when EDIT_ARTICLE_REJECTED is passed', (done) => {
    const action = {
      type: 'EDIT_ARTICLE_REJECTED',
      article
    };
    const expected = {
      article: null,
      articles: [],
      error: true,
      loading: false,
      featuredArticles: null,
      paginationMeta: {},
      reqError: undefined,
      articleLikes: 0,
      likeStatus: false
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should return default state when nothing is passed in delete article', (done) => {
    const action = {
      type: ''
    };
    const expected = [];
    const newState = articleReducer([], action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update state when DELETE_ARTICLE_BEGINS is passed', (done) => {
    const action = {
      type: 'DELETE_ARTICLE_BEGINS',
    };
    const expected = { loading: true };
    const newState = articleReducer([], action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when DELETE_ARTICLE is passed', (done) => {
    const action = {
      type: 'DELETE_ARTICLE',
    };
    const expected = {
      deleted: undefined, loading: false
    };
    const newState = articleReducer([], action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when DELETE_ARTICLE_FAIL is passed', (done) => {
    const action = {
      type: 'DELETE_ARTICLE_FAIL',
    };
    const expected = {
      loading: false, reqStatus: undefined
    };
    const newState = articleReducer([], action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when DELETE_ARTICLES_REJECTED is passed', (done) => {
    const action = {
      type: 'DELETE_ARTICLE_REJECTED',
      article
    };
    const expected = {
      loading: false, reqError: undefined
    };
    const newState = articleReducer([], action);
    expect(newState).toEqual(expected);
    done();
  });

  it('should return the state when a user likes an article', () => {
    const action = {
      type: 'LIKE_ARTICLE_SUCCESS'
    };
    const state = articleReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the state when a user likes an article fails', () => {
    const action = {
      type: 'LIKE_ARTICLE_FAILED'
    };
    const state = articleReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the state when a user unlikes an article', () => {
    const action = {
      type: 'UNLIKE_ARTICLE_SUCCESS'
    };
    const state = articleReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the state when a user unlikes an article fails', () => {
    const action = {
      type: 'UNLIKE_ARTICLE_FAILED'
    };
    const state = articleReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the state when likes count on article fails', () => {
    const action = {
      type: 'LIKES_COUNT_FAILED'
    };
    const state = articleReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the state when likes status on article fails', () => {
    const action = {
      type: 'LIKE_STATUS_FAILED'
    };
    const state = articleReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should setup default article state', () => {
    // action.type in this case is '@@INIT' which only returns the default
    // initial state
    const state = articleReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });
});
