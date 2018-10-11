import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../__mocks__/mockData';
import {
  resetPasswordSuccess,
  resetPasswordFailed,
  startResetPassword,
  resetPasswordUpdateSuccess,
  resetPasswordUpdateFailed,
  startResetPasswordUpdate
} from '../../actions/authentication/resetPassword';
import {
  RESET_PASSWORD_REQUEST_SUCCESSFUL,
  RESET_PASSWORD_REQUEST_FAILED,
  RESET_PASSWORD_UPDATE_SUCCESSFUL,
  RESET_PASSWORD_UPDATE_FAILED
} from '../../actions/types';

const createMockStore = configureMockStore([thunk]);

describe('Reset Password Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should setup reset password on success action object', () => {
    const { signUpDetails } = mockData;
    const action = resetPasswordSuccess(signUpDetails.email);
    expect(action).toEqual({
      type: RESET_PASSWORD_REQUEST_SUCCESSFUL,
      email: signUpDetails.email
    });
  });

  test('should setup reset password on failure action object', () => {
    const { resetPasswordError } = mockData;
    const action = resetPasswordFailed(resetPasswordError);
    expect(action).toEqual({
      type: RESET_PASSWORD_REQUEST_FAILED,
      error: resetPasswordError
    });
  });

  test('should send a reset link when a valid email is provided', (done) => {
    const { signUpDetails, resetLinkMessage } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: resetLinkMessage
      });
    });
    const expectedActions = [
      {
        type: RESET_PASSWORD_REQUEST_SUCCESSFUL,
        email: signUpDetails.email
      }
    ];
    const store = createMockStore({}, done);
    return store.dispatch(startResetPassword(signUpDetails.email)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });

  test('should not send a reset link when an invalid email is provided', (done) => {
    const { resetPasswordError, signUpDetails } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: resetPasswordError
        }
      });
    });
    const expectedActions = [
      {
        type: RESET_PASSWORD_REQUEST_FAILED,
        error: resetPasswordError
      }
    ];
    const store = createMockStore({}, done);

    store.dispatch(startResetPassword(signUpDetails.email)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });

  test('should setup reset password update on success action', () => {
    const { password, password_confirmation, passwordtoken } = mockData; // eslint-disable-line
    const action = resetPasswordUpdateSuccess({
      password,
      password_confirmation,
      passwordtoken
    });
    expect(action).toEqual({
      type: RESET_PASSWORD_UPDATE_SUCCESSFUL,
      password,
      password_confirmation,
      passwordtoken
    });
  });

  test('should setup reset password update on failure action', () => {
    const { resetPasswordError } = mockData;
    const action = resetPasswordUpdateFailed(resetPasswordError);
    expect(action).toEqual({
      type: RESET_PASSWORD_UPDATE_FAILED,
      error: resetPasswordError
    });
  });

  test('should reset the password when a valid link is provided', (done) => {
    const {
      password,
      password_confirmation, // eslint-disable-line
      passwordtoken,
      resetUpdateLinkMessage
    } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: resetUpdateLinkMessage
      });
    });

    const expectedActions = [
      {
        type: RESET_PASSWORD_UPDATE_SUCCESSFUL,
        password,
        password_confirmation,
        passwordtoken
      }
    ];
    const store = createMockStore({}, done);
    return store
      .dispatch(
        startResetPasswordUpdate({
          password,
          password_confirmation,
          passwordtoken
        })
      )
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  test('should not reset the password when an invalid link is provided', (done) => {
    const {
      password,
      password_confirmation, // eslint-disable-line
      passwordtoken,
      expiredlinkMessage
    } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          message: expiredlinkMessage
        }
      });
    });

    const expectedActions = [
      {
        type: RESET_PASSWORD_UPDATE_FAILED,
        error: expiredlinkMessage
      }
    ];
    const store = createMockStore({}, done);
    return store
      .dispatch(
        startResetPasswordUpdate({
          password,
          password_confirmation,
          passwordtoken
        })
      )
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
        done();
      });
  });
});
