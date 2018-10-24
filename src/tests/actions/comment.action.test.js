import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../__mocks__/commentMockData';
import * as types from '../../actions/types';

import {
  loadComments,
  createComment,
  loadCommentReplies,
  updateComment,
  updateCommentReply,
  deleteComment,
  deleteCommentReply,
  createCommentReply,
} from '../../actions/comment.actions';

const mockStore = configureMockStore([thunk]);

describe('Comment Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should LOAD_COMMENTS_SUCCESS when comments are successfully loaded', (done) => {
    const { comments } = mockData;
    const articleComments = {
      articleSlug: 'how-to-train-your-dragon',
      page: 1,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: comments
      });
    });

    const expectedActions = {
      type: types.LOAD_COMMENT_SUCCESSFUL,
      comments
    };
    const store = mockStore({ comment: {} }, done);
    return store.dispatch(loadComments(articleComments))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });
  it('should create COMMENT_ERRORS when comments are not successfully loaded', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };
    const store = mockStore({ comments: [] }, done);
    return store.dispatch(loadComments('life'))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });

  it('should create CREATE_COMMENT_SUCCESSFUL when comments are successfully created', (done) => {
    const comment = {
      slug: 'how-to-train-your-dragon',
      body: 'This is dave chappelle'
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: comment
      });
    });

    const expectedActions = {
      type: types.CREATE_COMMENT_SUCCESSFUL,
      comment
    };
    const store = mockStore({});
    return store.dispatch(createComment(comment))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });
  it('should create COMMENT_ERRORS when comments are not successfully created', (done) => {
    const comment = {
      slug: 'how-to-train-your-dragon',
      body: ''
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };

    const store = mockStore({ comment: {} }, done);
    return store.dispatch(createComment(comment))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });

  it('should create UPDATE_COMMENT_SUCCESSFUL when comments are successfully updated', (done) => {
    const comment = {
      slug: 'how-to-train-your-dragon',
      body: 'This is dave chappelle edit'
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: comment
      });
    });

    const expectedActions = {
      type: types.UPDATE_COMMENT_SUCCESSFUL,
      comment
    };
    const store = mockStore({});
    return store.dispatch(updateComment(comment))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });
  it('should create COMMENT_ERRORS when comments are not successfully updated', (done) => {
    const comment = {
      slug: 'how-to-train-your-dragon',
      body: ''
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };

    const store = mockStore({ comment: {} }, done);
    return store.dispatch(updateComment(comment))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });

  it('should create DELETE_COMMENT_SUCCESSFUL when comments are successfully deleted', (done) => {
    const comment = {
      slug: 'how-to-train-your-dragon',
      body: {
        id: 4,
        body: 'This is dave chappelle edit'
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: comment
      });
    });

    const expectedActions = {
      type: types.DELETE_COMMENT_SUCCESSFUL,
      comment: comment.body.body
    };
    const store = mockStore({});
    return store.dispatch(deleteComment(comment.body))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });

  it('should create COMMENT_ERRORS when comments are not successfully deleted', (done) => {
    const comment = {
      slug: 'how-to-train-your-dragon',
      body: ''
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };

    const store = mockStore({ comment: {} }, done);
    return store.dispatch(deleteComment(comment))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });
});

describe('Comment Replies Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create LOAD_COMMENT_REPLIES_SUCCESSFUL when comments are successfully loaded',
    (done) => {
      const { commentReplies } = mockData;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            replies: { ...commentReplies }
          }
        });
      });

      const expectedActions = {
        type: types.LOAD_COMMENT_REPLIES_SUCCESSFUL,
        commentId: commentReplies[0].commentId,
        commentReplies
      };
      const store = mockStore({ comment: {} }, done);
      return store.dispatch(loadCommentReplies(commentReplies[0].commentId))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedActions);
          done();
        });
    });

  it('should create COMMENT_ERRORS when comments are not successfully loaded', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };
    const store = mockStore({ comments: [] }, done);
    return store.dispatch(loadCommentReplies('life'))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });

  it('should create CREATE_COMMENT_REPLY_SUCCESSFUL when comment replies are successfully created',
    (done) => {
      const { commentReplies } = mockData;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            reply: commentReplies[0].replies[0]
          }
        });
      });

      const expectedActions = {
        type: types.CREATE_COMMENT_REPLY_SUCCESSFUL,
        reply: commentReplies[0].replies[0],
        commentReply: commentReplies[0].replies[0]
      };
      const store = mockStore({});
      return store.dispatch(createCommentReply(commentReplies[0].replies[0]))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedActions);
          done();
        });
    });

  it('should create COMMENT_ERRORS when comment replies are not successfully created', (done) => {
    const { commentReplies } = mockData;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };

    const store = mockStore({}, done);
    return store.dispatch(createCommentReply(commentReplies[0].replies[0]))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });

  it('should create UPDATE_COMMENT_REPLY_SUCCESSFUL when comments are successfully updated',
    (done) => {
      const { commentReplies } = mockData;
      const reply = {
        reply: commentReplies[0].replies[0],
        comment: commentReplies[0].commentId,
        commentReply: commentReplies[0].replies[0]
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            reply: reply.reply
          }
        });
      });
      const expectedActions = {
        type: types.UPDATE_COMMENT_REPLY_SUCCESSFUL,
        reply: commentReplies[0].replies[0],
        commentReply: commentReplies[0].replies[0]
      };
      const store = mockStore({});
      return store.dispatch(updateCommentReply(reply))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedActions);
          done();
        });
    });

  it('should create COMMENT_ERRORS when comments are not successfully updated', (done) => {
    const { commentReplies } = mockData;
    const reply = {
      reply: commentReplies[0].replies[0],
      comment: commentReplies[0].commentId,
      commentReply: commentReplies[0].replies[0]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400,
      },
    };

    const store = mockStore({}, done);
    return store.dispatch(updateCommentReply(reply))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });

  it('should create DELETE_COMMENT_REPLY_SUCCESSFUL when comments are successfully deleted',
    (done) => {
      const { commentReplies } = mockData;
      const reply = {
        reply: commentReplies[0].replies[0],
        comment: commentReplies[0].commentId,
        commentReply: commentReplies[0].replies[0]
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            reply: commentReplies[0].replies[0],
            commentReply: commentReplies[0].replies[0]
          },
        });
      });

      const expectedActions = {
        type: types.DELETE_COMMENT_REPLY_SUCCESSFUL,
        reply: commentReplies[0].replies[0],
        commentReply: commentReplies[0].replies[0]
      };
      const store = mockStore({});
      return store.dispatch(deleteCommentReply(reply))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedActions);
          done();
        });
    });

  it('should create COMMENT_ERRORS when comments are not successfully deleted', (done) => {
    const { commentReplies } = mockData;
    const reply = {
      reply: commentReplies[0].replies[0],
      comment: commentReplies[0].commentId,
      commentReply: commentReplies[0].replies[0]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Sorry, an unexpected error occurred.'
        }
      });
    });

    const expectedActions = {
      type: types.COMMENT_ERRORS,
      error: {
        data: {
          message: 'Sorry, an unexpected error occurred.'
        },
        status: 400
      },
    };

    const store = mockStore({}, done);
    return store.dispatch(deleteCommentReply(reply))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
        done();
      });
  });
});
