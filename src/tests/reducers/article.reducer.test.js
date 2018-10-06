import articleReducer from '../../reducers/Article';

const initialState = {
  reqStatus: {},
  reqError: false,
  loading: false,
  articles: [],
  article: {}
};
const article = {
  title: 'new article',
  description: 'new article begins',
  body: 'create article'
};
describe('Article reducer', () => {
  it('should return default state when nothing is passed in get', (done) => {
    const action = {
      type: ''
    };
    const expected = {
      reqStatus: {},
      reqError: false,
      loading: false,
      articles: [],
      article: {}
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
      article: null, articles: [], loading: true, reqError: false, reqStatus: {}
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLES_SUCCESSFUL is passed', (done) => {
    const action = {
      type: 'GET_ARTICLES_SUCCESSFUL',
      article
    };
    const expected = {
      article: {}, articles: undefined, loading: false, reqError: false, reqStatus: {}
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
      article: {}, articles: [], loading: false, reqError: undefined, reqStatus: {}
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
      article: {}, articles: [], loading: false, reqError: undefined, reqStatus: {}
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  //
  it('should update state when GET_ARTICLE_BEGINS is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE_BEGINS'
    };
    const expected = {
      article: null, articles: [], loading: true, reqError: false, reqStatus: {}
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when GET_ARTICLE_SUCCESSFUL is passed', (done) => {
    const action = {
      type: 'GET_ARTICLE_SUCCESSFUL',
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
      reqError: false,
      reqStatus: {}
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
      article: {}, articles: [], loading: false, reqError: undefined, reqStatus: {}
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
      article: {}, articles: [], loading: false, reqError: undefined, reqStatus: {}
    };
    const newState = articleReducer(initialState, action);
    expect(newState).toEqual(expected);
    done();
  });
});
