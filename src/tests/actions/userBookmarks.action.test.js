import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import userBookmarks from '../../actions/profile/userBookmarks.action';
import { GET_USER_BOOKMARK_SUCCESS, GET_USER_BOOKMARK_FAILURE } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Followers Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const store = mockStore({});

  it('creates GET_USER_BOOKMARK_SUCCESS when retrieving bookmarks', (done) => {
    const bookmarks = {};
    const expectedActions = [
      {
        type: GET_USER_BOOKMARK_SUCCESS,
        bookmarks: {
          articles: [{
            body: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            createdAt: '2018-10-02T12:07:45.830Z',
            description: 'why code in ruby',
            id: 3,
            readingTime: '3 min read',
            slug: 'how-coding-works',
            title: 'Coding',
            updatedAt: '2018-10-02T12:07:45.830Z',
            userId: 10,
          }],
          paginationMeta: {}
        }
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/articles?favorite=true`, {
      status: 200,
      response: bookmarks
    });
    store.dispatch(userBookmarks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('creates GET_USER_FOLLOWERS_FAILURE when retrieving followers', (done) => {
    const errors = {};
    const expectedActions = [
      {
        type: GET_USER_BOOKMARK_FAILURE,
        errors
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/articles?favorite=true`, {
      status: 400,
      response: errors
    });
    store.dispatch(userBookmarks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
