import editProfile from '../../reducers/editProfile';

import {
  EDIT_PROFILE_BEGINS,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from '../../actions/types';
import mockData from '../__mocks__/mockData';

describe('Edit Profile reducer', () => {
  it('should return the initial state', (done) => {
    expect(editProfile(undefined, {})).toEqual({
      error: {}, loading: false, user: {}
    });
    done();
  });
  it('should show a loading state when updating profile', (done) => {
    const state = {};
    const action = {
      type: EDIT_PROFILE_BEGINS,
    };
    const newState = editProfile(state, action);
    expect(newState.loading).toEqual(true);
    done();
  });
  it('should get a user profile successfully', (done) => {
    const state = {};
    const { user } = mockData;
    const payload = {
      user
    };
    const action = {
      type: EDIT_PROFILE_SUCCESS,
      payload
    };
    const newState = editProfile(state, action);
    expect(newState.loading).toEqual(false);
    done();
  });
  it('should fail to get a user profile', (done) => {
    const state = {};
    const invalidUser = {};
    const payload = {
      invalidUser
    };
    const action = {
      type: EDIT_PROFILE_FAILURE,
      payload
    };
    const newState = editProfile(state, action);
    expect(newState.loading).toEqual(false);
    done();
  });
});
