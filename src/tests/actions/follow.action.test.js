import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  getMyFollowersActions,
  getMyFollowingActions,
  followUserAction,
  unfollowUserAction,
} from '../../actions/followAction';
import {
  CREATE_FOLLOW_RELATIONSHIP,
  DELETE_FOLLOW_RELATIONSHIP,
  GET_ALL_FOLLOWERS,
  GET_ALL_FOLLOWING,
  FOLLOW_ERRORS,
} from '../../actions/types';
import config from '../../config/index';

const username = 'dan';
const user = 'chidex';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
  data: {
    message: 'You are yet to have followers.'
  }
};
const response2 = {
  data: {
    message: 'You are now following dan'
  }
};

const response3 = {
  data: {
    message: 'You have Unfollowed dan'
  }
};

const errorResponse = {
  error: {
    response: {
      data: {
        message: `You never followed ${username}`
      }
    }
  }
};

const errorResponse1 = {
  error: {
    response: {
      data: {
        message: `You are already following ${username}`
      }
    }
  }
};

const errorResponse2 = {
  error: {
    response: {
      data: {
        message: `You never followed ${username}`

      }
    }
  }
};
describe('Follow actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it(
    'creates GET_ALL_FOLLOWERS',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/followers`, {
          status: 201,
          response: response.data,
        }
      );

      const expectedActions = [{
        type: GET_ALL_FOLLOWERS,
        data: (response)
      }];
      const store = mockStore({});
      store.dispatch(getMyFollowersActions(username))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );

  it(
    'creates GET_ALL_FOLLOWING',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/following`, {
          status: 201,
          response: response.data,
        }
      );

      const expectedActions = [{
        type: GET_ALL_FOLLOWING,
        data: (response)
      }];
      const store = mockStore({});
      store.dispatch(getMyFollowingActions(username))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );

  it(
    'creates CREATE_FOLLOW_RELATIONSHIP',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/follow`, {
          status: 200,
          response: response2.data.message,
        }
      );

      const expectedActions = [{
        type: CREATE_FOLLOW_RELATIONSHIP,
        message: (response2.data)
      }];
      const store = mockStore({});
      store.dispatch(followUserAction(username, user))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );

  it(
    'creates DELETE_FOLLOW_RELATIONSHIP,',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/unfollow`, {
          status: 200,
          response: response3.data.message,
        }
      );

      const expectedActions = [{
        type: DELETE_FOLLOW_RELATIONSHIP,
        message: (response3.data)
      }];
      const store = mockStore({});
      store.dispatch(unfollowUserAction(username, user))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );


  it(
    'creates FOLLOW_ERRORS when signup action is not successful',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/followers`, {
          status: 401,
          response: errorResponse
        }
      );
      const expectedActions = [{
        type: FOLLOW_ERRORS,
        error: errorResponse
      }];
      const store = mockStore({});
      store.dispatch(getMyFollowersActions(username))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );

  it(
    'creates FOLLOW_ERRORS when signup action is not successful',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/following`, {
          status: 401,
          response: errorResponse
        }
      );
      const expectedActions = [{
        type: FOLLOW_ERRORS,
        error: errorResponse
      }];
      const store = mockStore({});
      store.dispatch(getMyFollowingActions(username))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );
  it(
    'creates FOLLOW_ERRORS when signup action is not successful',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/follow`, {
          status: 409,
          response: errorResponse1
        }
      );
      const expectedActions = [{
        type: FOLLOW_ERRORS,
        error: errorResponse1
      }];
      const store = mockStore({});
      store.dispatch(followUserAction(username, user))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );

  it(
    'creates FOLLOW_ERRORS when signup action is not successful',
    (done) => {
      moxios.stubRequest(
        `${config.apiUrl}/profiles/${username}/unfollow`, {
          status: 409,
          response: errorResponse2
        }
      );
      const expectedActions = [{
        type: FOLLOW_ERRORS,
        error: errorResponse2
      }];
      const store = mockStore({});
      store.dispatch(unfollowUserAction(username, user))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    }
  );
});
