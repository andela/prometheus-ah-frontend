import articleReducer from '../../reducers/Article';

const initialState = {
  reqError: null,
  loading: false,
  articles: [],
  article: null,
  paginationMeta: {}
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
      paginationMeta: {}
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
      article: null, articles: [], loading: true, paginationMeta: {}, reqError: null
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
      loading: false,
      paginationMeta: {},
      reqError: null
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
      paginationMeta: {},
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
      article: null, articles: [], loading: false, paginationMeta: {}, reqError: undefined
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
      article: null, articles: [], loading: true, paginationMeta: {}, reqError: null
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
      article: null, articles: [], loading: true, paginationMeta: {}, reqError: null
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
      article: null, articles: undefined, loading: false, paginationMeta: {}, reqError: null
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
      article: null, articles: [], loading: false, paginationMeta: {}, reqError: undefined
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
      article: null, articles: [], loading: false, paginationMeta: {}, reqError: undefined
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
      article: null, articles: [], loading: true, paginationMeta: {}, reqError: null
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
      loading: false,
      paginationMeta: {},
      reqError: null
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
      article: null, articles: [], loading: false, paginationMeta: {}, reqError: undefined
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
      article: null, articles: [], loading: false, paginationMeta: {}, reqError: undefined
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
      article: null, articles: [], loading: true, paginationMeta: {}, reqError: null
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
      loading: false,
      paginationMeta: {},
      reqError: null
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
      article: null, articles: [], loading: false, paginationMeta: {}, reqError: undefined
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
      paginationMeta: {},
      reqError: undefined
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
  it('should update the state when DELETE_ARTICLES_FAIL is passed', (done) => {
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
});
