import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import userArticles from '../../actions/profile/userArticles.action';
import { GET_USER_ARTICLE_SUCCESS, GET_USER_ARTICLE_FAILURE } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Articles Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const store = mockStore({});

  it('creates GET_USER_ARTICLE_SUCCESS when retrieving articles by a user', (done) => {
    const payload = {
      paginationMeta: {},
      articles: []
    };
    const expectedActions = [
      {
        type: GET_USER_ARTICLE_SUCCESS,
        payload
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/articles?user=kingsley`, {
      status: 200,
      response: payload
    });
    store.dispatch(userArticles('kingsley')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('creates GET_USER_ARTICLE_FAILURE when retrieving articles by a user', (done) => {
    const payload = {
      paginationMeta: {},
      articles: []
    };
    const expectedActions = [
      {
        type: GET_USER_ARTICLE_FAILURE,
        payload
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/articles?user=kingsley`, {
      status: 400,
      response: payload
    });
    store.dispatch(userArticles('kingsley')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
