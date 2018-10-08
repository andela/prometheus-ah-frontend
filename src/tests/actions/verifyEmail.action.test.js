import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import routes from '../../constants/routes';
import { startVerifyEmail } from '../../actions/verifyAccount.action';
import {
  VERIFY_EMAIL_SUCCESSFUL,
  VERIFY_EMAIL_SUCCESSFUL_TOKEN,
  VERIFY_EMAIL_FAILED
} from '../../actions/types';
import mockCookieStorage from '../__mocks__/mockCookieStorage';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.cookies = mockCookieStorage;

describe('Verify Email Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('create a email verify success token when user successfully verify email', (done) => {
    const { token } = mockData.authResponse;
    moxios.stubRequest(`${config.apiUrl}/api${routes.VERIFY_EMAIL}?emailToken=${token}`, {
      status: 200,
      response: { data: { message: 'success' } }
    });
    const expectedActions = {
      type: VERIFY_EMAIL_SUCCESSFUL_TOKEN,
      token
    };
    const store = mockStore({});
    store.dispatch(startVerifyEmail(token)).then(() => {
      expect(store.getActions().toEqual(expectedActions));
    });
    done();
  });

  it('create a email verify success token when user successfully verify email', (done) => {
    const { token } = mockData.authResponse;
    const { message } = mockData.successResponse;
    moxios.stubRequest(`${config.apiUrl}/api${routes.VERIFY_EMAIL}?emailToken=${token}`, {
      status: 200,
      response: { data: { message: 'success' } }
    });
    const expectedActions = {
      type: VERIFY_EMAIL_SUCCESSFUL,
      success: message
    };
    const store = mockStore({});
    store.dispatch(startVerifyEmail(message)).then(() => {
      expect(store.getActions().toEqual(expectedActions));
    });
    done();
  });

  it('create an error user has already been verified or token has expired', (done) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbC5lemVoMTVAZ21haWwuY29tIiwiZW1haWxUb2tlbkV4cGlyZWRUaW1lIjoiMjAxOC0xMC0xMVQxNjo0MTo1OS4wODVaIiwiaWF0IjoxNTM5Mjc2MTE5LCJleHAiOjE1MzkyNzYxMjB9.IfuzpDhKD8PpWUHdAVJhCmanRknMVt53Tn12N_Dss0A';
    const { error } = mockData.errorResponse;
    moxios.stubRequest(`${config.apiUrl}/api${routes.VERIFY_EMAIL}${token}`, {
      status: 400,
      response: { data: { message: 'tttttttttt' } },
    });
    const expectedActions = {
      type: VERIFY_EMAIL_FAILED,
      error
    };
    const store = mockStore({});
    store.dispatch(startVerifyEmail(error)).then(() => {
      expect(store.getActions().toEqual(expectedActions));
    });
    done();
  });
});
