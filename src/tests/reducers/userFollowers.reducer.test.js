import userFollowers from '../../reducers/userFollowers';
import {
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_FOLLOWERS_FAILURE
} from '../../actions/types';

describe('User Followers reducer', () => {
  it('should return the initial state', (done) => {
    expect(userFollowers(undefined, {})).toEqual({
      error: {}, user: {}
    });
    done();
  });
  it('should get a user followers successfully', (done) => {
    const state = {};
    const payload = {
      user: {}
    };
    const action = {
      type: GET_USER_FOLLOWERS_SUCCESS,
      payload
    };
    const newState = userFollowers(state, action);
    expect(newState.user).toBeDefined();
    done();
  });
  it('should fail to get a user followers', (done) => {
    const state = {};
    const action = {
      type: GET_USER_FOLLOWERS_FAILURE,
      payload: {}
    };
    const newState = userFollowers(state, action);
    expect(newState.error).toBeDefined();
    done();
  });
});
