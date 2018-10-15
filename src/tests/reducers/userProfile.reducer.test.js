import userProfile from '../../reducers/userProfile';
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_BEGINS,
  GET_PROFILE_FAILURE
} from '../../actions/types';
import mockData from '../__mocks__/mockData';

describe('User Profile reducer', () => {
  it('should return the initial state', (done) => {
    expect(userProfile(undefined, {})).toEqual({
      error: {}, loading: false, user: {}
    });
    done();
  });
  it('should show a loading state when getting profile', (done) => {
    const state = {};
    const action = {
      type: GET_PROFILE_BEGINS,
    };
    const newState = userProfile(state, action);
    expect(newState.loading).toEqual(true);
    done();
  });
  it('should get a user profile successfully', (done) => {
    const state = {};
    const { profile } = mockData;
    const payload = {
      message: 'Profile successfully retrieved',
      profile
    };
    const action = {
      type: GET_PROFILE_SUCCESS,
      payload
    };
    const newState = userProfile(state, action);
    expect(newState.loading).toEqual(false);
    expect(newState.user.message).toEqual('Profile successfully retrieved');
    done();
  });
  it('should fail to get a user profile', (done) => {
    const state = {};
    const action = {
      type: GET_PROFILE_FAILURE,
      payload: {}
    };
    const newState = userProfile(state, action);
    expect(newState.error).toBeDefined();
    done();
  });
});
