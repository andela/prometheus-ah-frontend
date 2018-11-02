import userBookmarks from '../../reducers/userBookmarks';
import {
  GET_USER_BOOKMARK_SUCCESS,
  GET_USER_BOOKMARK_FAILURE
} from '../../actions/types';

describe('User Followers reducer', () => {
  it('should return the initial state', (done) => {
    expect(userBookmarks(undefined, {})).toEqual({
      error: {}, bookmarks: {}
    });
    done();
  });
  it('should get a user bookmarks successfully', (done) => {
    const state = {};
    const bookmarks = {
      articles: [{
        body: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        createdAt: '2018-10-02T12:07:45.830Z',
        description: 'why code in ruby',
        id: 3,
        readingTime: '3 min read',
        slug: 'how-coding-works',
        title: 'Coding',
        updatedAt: '2018-10-02T12:07:45.830Z',
        userId: 10,
      }],
      paginationMeta: {}
    };
    const action = {
      type: GET_USER_BOOKMARK_SUCCESS,
      bookmarks
    };
    const newState = userBookmarks(state, action);
    expect(newState.bookmarks).toBeDefined();
    done();
  });
  it('should fail to get a user bookmarks', (done) => {
    const state = {};
    const action = {
      type: GET_USER_BOOKMARK_FAILURE,
      payload: {}
    };
    const newState = userBookmarks(state, action);
    expect(newState.error).toBeDefined();
    done();
  });
});
