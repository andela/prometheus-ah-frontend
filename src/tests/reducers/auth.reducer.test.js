import authReducer from '../../reducers/auth';
import {
  SET_CURRENT_USER,
  SIGN_UP_ERRORS,
  SIGN_UP_SUCCESS,
  DELETE_ERROR_MESSAGE,
} from '../../actions/types';
import mockData from '../__mocks__/mockData';

describe('Auth reducer', () => {
  it('should return the initial state', (done) => {
    expect(authReducer(undefined, {})).toEqual({
      error: {}, isAuthenticated: false, user: {}
    });
    done();
  });

  it('should set the current user when passed SET_CURRENT_USER', (done) => {
    const state = {};
    const user = mockData.signUpDetails;
    const action = {
      type: SET_CURRENT_USER,
      user
    };

    const newState = authReducer(state, action);
    expect(newState.isAuthenticated).toEqual(true);
    expect(newState.user.username).toEqual('valentine');
    expect(newState.user.email).toEqual('ugochukwu.ezeh@yahoo.com');
    expect(newState.user.password).toEqual('password');
    expect(newState.user.password_confirmation).toEqual('password');
    done();
  });
  it('should set the current user to empty when passed SIGN_UP_ERRORS', (done) => {
    const state = {};
    const error = mockData.emailErrorResponse;
    const empty = mockData.emailErrorResponse;
    const action = {
      type: SIGN_UP_ERRORS,
      error
    };

    const newState = authReducer(state, action);
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.error.email).toEqual(empty.email);
    done();
  });

  it('should set the current user a success message when passed SIGN_UP_SUCCESS', (done) => {
    const state = {};
    const success = mockData.successResponse;
    const successMessage = mockData.successResponse;
    const action = {
      type: SIGN_UP_SUCCESS,
      success
    };

    const newState = authReducer(state, action);
    expect(newState.success.success).toEqual(successMessage.success);
    done();
  });

  it('should delete error message coming from server', (done) => {
    const state = {};
    const errorMessage = {
      error: {}
    };
    const action = {
      type: DELETE_ERROR_MESSAGE,
      error: { message: 'Email or Username is already in use by another User.' }
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual(errorMessage);
    done();
  });
});
