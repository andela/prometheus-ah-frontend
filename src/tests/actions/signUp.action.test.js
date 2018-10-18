import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import routes from '../../constants/routes';
import { userSignUpRequest, deleteErrorMessage } from '../../actions/signUp.action';
import { SIGN_UP_ERRORS, HIDE_SIGNUP_MODAL } from '../../actions/types';
import mockData from '../__mocks__/mockData';
import mockCookieStorage from '../__mocks__/mockCookieStorage';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.cookies = mockCookieStorage;

describe('Sign Up Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates SIGN_UP_ERRORS when signup action is not successful', (done) => {
    const { errorResponse, signUpDetails } = mockData;
    moxios.stubRequest(`${config.apiUrl}${routes.SIGN_UP}`, {
      status: 400,
      response: errorResponse
    });
    const expectedActions = {
      type: SIGN_UP_ERRORS,
      error: errorResponse
    };
    const store = mockStore({ auth: {} });
    store.dispatch(userSignUpRequest(signUpDetails, { push: jest.fn() }, jest.fn()))
      .then(() => {
        expect(store.getActions().toEqual(expectedActions));
      });
    done();
  });

  it('creates SIGN_UP_SUCCESS when signup action is successful', (done) => {
    const { authResponse, signUpDetails } = mockData;

    moxios.stubRequest(`${config.apiUrl}${routes.SIGN_UP}`, {
      status: 201,
      response: authResponse.data
    });
    const expectedActions = [
      { type: 'SET_CURRENT_USER', user: null },
      {
        type: HIDE_SIGNUP_MODAL,
      }
    ];
    const store = mockStore({ auth: {} });

    store.dispatch(userSignUpRequest(signUpDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
  it('should dispatch delete error message success', () => {
    const expectedActions = [
      { type: 'DELETE_ERROR_MESSAGE' }
    ];
    const store = mockStore({ auth: {} });
    store.dispatch(deleteErrorMessage());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
