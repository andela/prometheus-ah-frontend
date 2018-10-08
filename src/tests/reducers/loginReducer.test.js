import authReducer from '../../reducers/auth';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAIL,
  DELETE_ERROR_MESSAGE
} from '../../actions/types';
import mockData from '../__mocks__/mockData';

describe('Login Reducer', () => {
  it('should return the initial state', (done) => {
    expect(authReducer(undefined, {})).toEqual({
      isAuthenticated: false,
      user: {},
      error: {}
    });
    done();
  });

  it('should set the current user when passed SET_CURRENT_USER', (done) => {
    const state = {};
    const user = mockData.loginData;

    const action = {
      type: SET_CURRENT_USER,
      user
    };
    const newState = authReducer(state, action);
    expect(newState.isAuthenticated).toEqual(true);
    expect(newState.user.username).toEqual('faksam');
    done();
  });

  it('should set the current user to empty when passed SET_CURRENT_USER_FAIL', (done) => {
    const state = {};
    const error = mockData.loginDataError;
    const { empty } = mockData;

    const action = {
      type: SET_CURRENT_USER_FAIL,
      error
    };
    const newState = authReducer(state, action);
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.error.username).toEqual(empty);
    done();
  });

  it('should set the error to an empty object when passed DELETE_ERROR_MESSAGE', (done) => {
    const state = {};
    const error = {};

    const action = {
      type: DELETE_ERROR_MESSAGE
    };
    const newState = authReducer(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});
