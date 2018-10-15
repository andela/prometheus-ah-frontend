import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import userFollowing from '../../actions/profile/userFollowing.action';
import { GET_USER_FOLLOWING_SUCCESS, GET_USER_FOLLOWING_FAILURE } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Following Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const store = mockStore({});

  it('creates GET_USER_FOLLOWING_SUCCESS when retrieving users you follow', (done) => {
    const payload = [];
    const expectedActions = [
      {
        type: GET_USER_FOLLOWING_SUCCESS,
        payload
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/profiles/kingsley/following`, {
      status: 200,
      response: payload
    });
    store.dispatch(userFollowing('kingsley')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('creates GET_USER_FOLLOWING_FAILURE when retrieving users you follow', (done) => {
    const payload = [];
    const expectedActions = [
      {
        type: GET_USER_FOLLOWING_FAILURE,
        payload: []
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/profiles/wrong/following`, {
      status: 400,
      response: payload
    });
    store.dispatch(userFollowing('wrong')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
