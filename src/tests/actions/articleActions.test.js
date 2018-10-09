import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import articleMockData from '../__mocks__/articleMockData';
import * as types from '../../actions/actionTypes';
import { loadArticles } from '../../actions/articleActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Article Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should LOAD_ARTICLES_SUCCESS when articles are successfully loaded', (done) => {
    const { articles } = articleMockData;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articles
      });
    });

    const expectedActions = {
      type: types.LOAD_ARTICLES_SUCCESS,
      articles
    };
    const store = mockStore({ articles: [] }, done);
    const url = 'api/articles?page=1';
    return store.dispatch(loadArticles(url))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });
  it('should ARTICLE_ERRORS when articles are not successfully loaded', (done) => {
    const { articles } = articleMockData;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: articles
      });
    });

    const expectedActions = {
      type: types.ARTICLE_ERRORS
    };
    const store = mockStore({ articles: [] }, done);
    return store.dispatch(loadArticles('life'))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });
});
