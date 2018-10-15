import userFollowing from '../../reducers/userFollowing';
import {
  GET_USER_FOLLOWING_SUCCESS,
  GET_USER_FOLLOWING_FAILURE
} from '../../actions/types';

describe('User Followers reducer', () => {
  it('should return the initial state', (done) => {
    expect(userFollowing(undefined, {})).toEqual({
      error: {}, user: {}
    });
    done();
  });
  it('should get a user bookmarks successfully', (done) => {
    const state = {};
    const payload = {
      user: {}
    };
    const action = {
      type: GET_USER_FOLLOWING_SUCCESS,
      payload
    };
    const newState = userFollowing(state, action);
    expect(newState.user).toBeDefined();
    done();
  });
  it('should fail to get a user articles', (done) => {
    const state = {};
    const action = {
      type: GET_USER_FOLLOWING_FAILURE,
      payload: {}
    };
    const newState = userFollowing(state, action);
    expect(newState.error).toBeDefined();
    done();
  });
});
