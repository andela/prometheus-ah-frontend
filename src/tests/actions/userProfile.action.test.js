import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import userProfile from '../../actions/profile/userProfile.action';
import { GET_PROFILE_BEGINS, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Profile Actions', () => {
  const store = mockStore({});
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates GET_PROFILE_BEGINS when retrieving profile action is successful', (done) => {
    const expectedActions = [
      {
        type: GET_PROFILE_BEGINS,
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/profiles/kingsley`, {
      status: 200,
    });
    store.dispatch(userProfile('kingsley')).then(() => {
      expect(store.getActions().toEqual(expectedActions));
    });
    done();
  });

  it('creates GET_PROFILE_SUCCESS when retrieving profile action is successful', (done) => {
    const user = {
      message: 'Profile successfully retrieved',
      profile: {}
    };
    const expectedActions = [
      {
        type: GET_PROFILE_SUCCESS,
        user
      },
    ];

    moxios.stubRequest(`${config.apiUrl}/profiles/kingsley`, {
      status: 200,
      response: user
    });

    store.dispatch(userProfile('kingsley')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('creates GET_PROFILE_FAILURE when retrieving profile is not successful', (done) => {
    const user = {
      error: {
        message: 'Sorry, there is no user with that username'
      },
      user: {}
    };
    const expectedActions = [
      {
        type: GET_PROFILE_FAILURE,
        user
      },
    ];
    moxios.stubRequest(`${config.apiUrl}/profiles/invalid_username`, {
      status: 400,
      payload: {}
    });
    store.dispatch(userProfile('invalid_username')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
