import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import userFollowers from '../../actions/profile/userFollowers.action';
import { GET_USER_FOLLOWERS_SUCCESS, GET_USER_FOLLOWERS_FAILURE } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Followers Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const store = mockStore({});

  it('creates GET_USER_FOLLOWERS_SUCCESS when retrieving followers', (done) => {
    const payload = [];
    const expectedActions = [
      {
        type: GET_USER_FOLLOWERS_SUCCESS,
        payload
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/profiles/kingsley/followers`, {
      status: 200,
      response: payload
    });
    store.dispatch(userFollowers('kingsley')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('creates GET_USER_FOLLOWERS_FAILURE when retrieving followers', (done) => {
    const errors = {};
    const expectedActions = [
      {
        type: GET_USER_FOLLOWERS_FAILURE,
        errors
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/profiles/kingsley/followers`, {
      status: 400,
      response: errors
    });
    store.dispatch(userFollowers('kingsley')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
