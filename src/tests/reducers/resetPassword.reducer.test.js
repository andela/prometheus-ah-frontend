import resetPasswordreducer from '../../reducers/resetPasswordReducer';
import {
  RESET_PASSWORD_REQUEST_SUCCESSFUL,
  RESET_PASSWORD_REQUEST_FAILED,
  RESET_PASSWORD_UPDATE_SUCCESSFUL,
  RESET_PASSWORD_UPDATE_FAILED
} from '../../actions/types';
import mockData from '../__mocks__/mockData';

describe('Reset password reducer', () => {
  test('should setup default reset password value', () => {
    // action.type in this case is '@@INIT' which only returns the default
    // initial state
    const state = resetPasswordreducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
  });

  test('should return the state when a valid email is sent with the request', () => {
    const { testEmail } = mockData;
    const action = {
      type: RESET_PASSWORD_REQUEST_SUCCESSFUL,
      email: testEmail
    };
    const state = resetPasswordreducer({}, action);
    expect(state).toEqual({});
  });

  test('should return an error in the state when invalid email is sent with the request', () => {
    const { testEmail } = mockData;
    const action = {
      type: RESET_PASSWORD_REQUEST_FAILED,
      email: testEmail
    };
    const state = resetPasswordreducer({}, action);
    expect(state).toHaveProperty('error');
  });

  test('should return the state when a valid email is sent with the request', () => {
    const { password, password_confirmation, passwordtoken } = mockData;  // eslint-disable-line
    const action = {
      type: RESET_PASSWORD_UPDATE_SUCCESSFUL,
      password,
      password_confirmation,
      passwordtoken
    };
    const state = resetPasswordreducer({}, action);
    expect(state).toEqual({});
  });

  test('should return an error in the state when invalid data is sent with the request', () => {
    const { password, password_confirmation, passwordtoken } = mockData;  // eslint-disable-line
    const action = {
      type: RESET_PASSWORD_UPDATE_FAILED,
      password,
      password_confirmation,
      passwordtoken
    };
    const state = resetPasswordreducer({}, action);
    expect(state).toHaveProperty('error');
  });
});
