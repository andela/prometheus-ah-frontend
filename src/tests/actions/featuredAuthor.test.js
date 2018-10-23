import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import fetchAuthor from '../../actions/featuedAuthor.action';
import config from '../../config';
import { GET_FEATURED_AUTHOR, GET_FEATURED_AUTHOR_FAIL } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
  data:
  {
    user: {
      id: 2,
      username: 'faksam',
      firstname: null,
      lastname: null,
      image: null,
      articles: [
        {
          id: 23,
          slug: 'the-most-important-skill-nobody-taught-you',
          title: 'The most important skill nobody taught you',
          readingTime: '1 min read'
        }
      ]
    },
    status: 404,
    message: 'The user faksam was not found'
  }
};

describe('featuredAuthor Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates GET_FEATURED_AUTHOR action', (done) => {
    moxios.stubRequest(`${config.apiUrl}/featuredAuthor`, {
      status: 200,
      response: response.data
    });

    const expectedActions = [{
      type: GET_FEATURED_AUTHOR,
      featuredAuthor: response.data.user
    }];
    const store = mockStore({});
    store.dispatch(fetchAuthor())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('creates GET_FEATURED_AUTHOR action', (done) => {
    moxios.stubRequest(`${config.apiUrl}/featuredAuthor`, {
      status: 404,
      response: response.message
    });

    const expectedActions = [{
      type: GET_FEATURED_AUTHOR_FAIL,
    }];
    const store = mockStore({});
    store.dispatch(fetchAuthor())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
