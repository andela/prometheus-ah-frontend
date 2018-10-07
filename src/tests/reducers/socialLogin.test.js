import { SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_ERROR } from '../../actions/types';
import socialLoginReducer from '../../reducers/socialLogin';
import mockData from '../__mocks__/mockData';

describe('social login reducer', () => {
  it('should return the initial state', (done) => {
    expect(socialLoginReducer(undefined, {})).toEqual({
      error: {},
      user: {},
    });
    done();
  });
  it('should return user when when passed SOCIAL_LOGIN_SUCCESS', (done) => {
    const state = {};
    const response = mockData.response1;
    const action = {
      type: SOCIAL_LOGIN_SUCCESS,
      response: response.user
    };
    const newState = socialLoginReducer(state, action);
    expect(newState.response).toEqual(response.user);
    done();
  });

  it('should return error when login is not successful passing SOCIAL_LOGIN_ERROR ', (done) => {
    const state = {};
    const { error } = mockData.errorResponse;
    const action = {
      error,
      type: SOCIAL_LOGIN_ERROR,
    };
    const newState = socialLoginReducer(state, action);

    expect(newState.error).toEqual(error);
    done();
  });
});
