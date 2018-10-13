import {
  CREATE_FOLLOW_RELATIONSHIP,
  DELETE_FOLLOW_RELATIONSHIP,
  GET_ALL_FOLLOWERS,
  GET_ALL_FOLLOWING,
  FOLLOW_ERRORS,
} from '../../actions/types';
import followReducer from '../../reducers/follow';

const response = {
  data: {
    message: 'You are now following dan'
  }
};

const response1 = {
  data: {
    message: 'You have Unfollowed dan'
  }
};

const response2 = {
  data: {
    message: 'You are yet to have followers.'
  }
};

describe('follow reducer', () => {
  it('should return the initial state', (done) => {
    expect(followReducer(undefined, {})).toEqual({
      message: {},
      error: {},
      followers: {},
      following: {},
      isFollowing: false
    });
    done();
  });

  it(' CREATE_FOLLOW_RELATIONSHIP', (done) => {
    const state = {};
    const action = {
      type: CREATE_FOLLOW_RELATIONSHIP,
      response: response.message
    };
    const newState = followReducer(state, action);
    expect(newState.response).toEqual(response.message);
    expect(newState.isFollowing).toEqual(true);
    done();
  });

  it(' DELETE_FOLLOW_RELATIONSHIP', (done) => {
    const state = {};
    const action = {
      type: DELETE_FOLLOW_RELATIONSHIP,
      response: response1.message
    };
    const newState = followReducer(state, action);
    expect(newState.response).toEqual(response.message);
    expect(newState.isFollowing).toEqual(false);
    done();
  });

  it(' GET_ALL_FOLLOWERS', (done) => {
    const state = {};
    const action = {
      type: GET_ALL_FOLLOWERS,
      response: response2.message
    };
    const newState = followReducer(state, action);
    expect(newState.response).toEqual(response.message);
    done();
  });

  it(' GET_ALL_FOLLOWING', (done) => {
    const state = {};
    const action = {
      type: GET_ALL_FOLLOWING,
      response: response.message
    };
    const newState = followReducer(state, action);
    expect(newState.response).toEqual(response.message);
    done();
  });
});
