import userArticles from '../../reducers/userArticles';
import {
  GET_USER_ARTICLE_SUCCESS,
  GET_USER_ARTICLE_FAILURE
} from '../../actions/types';

describe('User Articles reducer', () => {
  it('should return the initial state', (done) => {
    expect(userArticles(undefined, {})).toEqual({
      error: {}, user: {}
    });
    done();
  });
  it('should get a user articles successfully', (done) => {
    const state = {};
    const payload = {
      paginationMeta: {},
      articles: []
    };
    const action = {
      type: GET_USER_ARTICLE_SUCCESS,
      payload
    };
    const newState = userArticles(state, action);
    expect(newState.user.articles).toBeDefined();
    done();
  });
  it('should fail to get a user articles', (done) => {
    const state = {};
    const action = {
      type: GET_USER_ARTICLE_FAILURE,
      payload: {}
    };
    const newState = userArticles(state, action);
    expect(newState.error).toBeDefined();
    done();
  });
});
