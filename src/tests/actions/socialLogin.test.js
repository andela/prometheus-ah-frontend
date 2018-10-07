import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { socialLoginAction } from '../../actions/socialLogin';
import { SOCIAL_LOGIN_ERROR, SET_CURRENT_USER } from '../../actions/types';
import mockData from '../__mocks__/mockData';
import mockCookiesStorage from '../__mocks__/mockCookiesStorage';
import config from '../../config/index';

const socialLogin = 'google';
const code = 'kkkkkkkwwwwwwwwwww';

const response = {
  data: {
    message: 'authentication successful',
    user: {
      email: 'otutudinma@gmail.com',
      username: 'dinma',
      token: 'orkdkdkkskskksksksk111kdkdkd',
    },
  }
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.Cookies = mockCookiesStorage;

describe('Social login actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it(
    'creates SOCIAL_LOGIN_SUCCESS when sign up or google is successful',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/users/login/${socialLogin}/callback?code=${code}`, {
          status: 201,
          response: response.data,
        }
      );

      const expectedActions = [{
        type: SET_CURRENT_USER,
        user: (response.data.user)
      }];
      const store = mockStore({});
      store.dispatch(socialLoginAction(code, socialLogin))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );

  it(
    'creates SOCIAL_LOGIN_ERROR when signup action is not successful',
    (done) => {
      const { errorResponse } = mockData;
      moxios.stubRequest(
        `${config.apiUrl}/users/login/${socialLogin}/callback?code=${code}`, {
          status: 401,
          response: errorResponse
        }
      );
      const expectedActions = [{
        type: SOCIAL_LOGIN_ERROR,
        error: errorResponse
      }];
      const store = mockStore({});
      store.dispatch(socialLoginAction(code, socialLogin))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );
});
