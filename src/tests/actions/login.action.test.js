import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import routes from '../../constants/routes';
import config from '../../config';
import loginAction, { deleteErrorMessages } from '../../actions/authentication/loginAction';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAIL,
  HIDE_LOGIN_MODAL,
  DELETE_ERROR_MESSAGE
} from '../../actions/types';
import mockData from '../__mocks__/mockData';
import mockCookieStorage from '../__mocks__/mockCookieStorage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.Cookies = mockCookieStorage;

describe('Login Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates SET_CURRENT_USER when login action is succesful', (done) => {
    const { authResponse, loginData } = mockData;
    moxios.stubRequest(`${config.apiUrl}${routes.SIGN_IN}`, {
      status: 200,
      response: authResponse.data
    });

    const expectedActions = [{
      type: SET_CURRENT_USER,
      user: jwt.decode(authResponse.data.user.token)
    },
    {
      type: HIDE_LOGIN_MODAL,
    }];
    const store = mockStore({});
    store.dispatch(loginAction(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('creates SET_CURRENT_USER_FAIL when login is not successful', (done) => {
    const { errorResponse } = mockData;
    moxios.stubRequest(`${config.apiUrl}${routes.SIGN_IN}`, {
      status: 404,
      response: errorResponse
    });

    const expectedActions = [{
      type: SET_CURRENT_USER_FAIL,
      error: errorResponse
    }];
    const store = mockStore({});
    store.dispatch(loginAction(mockData.loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('creates DELETE_ERROR_MESSAGE when user enters valid credentials', () => {
    const action = deleteErrorMessages();

    expect(action).toEqual({
      type: DELETE_ERROR_MESSAGE,
    });
  });
});
