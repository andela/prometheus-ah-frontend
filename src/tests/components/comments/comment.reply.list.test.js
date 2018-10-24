import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedCommentReplyList,
{ CommentReplyList } from '../../../components/comment/CommentReplyList';
import mockData from '../../__mocks__/commentMockData';

const props = {
  createCommentReplyAction: jest.fn(),
  deleteCommentAction: jest.fn(),
  updateCommentAction: jest.fn(),
  loadCommentReplyAction: jest.fn(),
  loadCommentsAction: jest.fn(),
  article: mockData.articles[0],
  comment: mockData.comments.comments[0],
  auth: true,
  error: {},
  username: 'faksam',
  commentReply: {
    id: 2,
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    body: 'This article is hot',
    User: {
      username: 'joeeasy',
      email: 'joeeasy@gmail.com',
      bio: 'tomorrow is a better day',
      id: 1,
      isVerified: true,
      role: 'user'
    }
  },
  commentReplies: [
    {
      replies: [{
        id: 2,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 3,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 4,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      }],
      commentId: 1
    }, {
      replies: [{
        id: 2,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 3,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      },
      {
        id: 4,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        body: 'This article is hot',
        User: {
          username: 'joeeasy',
          email: 'joeeasy@gmail.com',
          bio: 'tomorrow is a better day',
          id: 1,
          isVerified: true,
          role: 'user'
        }
      }],
      commentId: 1
    }],
};
const initialState = {
  articleReducer: {
    article: mockData.articles[0],
  },
  auth: {
    error: {}
  },
  commentReducer: {
    commentReply: mockData.commentReplies[0],
    commentReplies: props.commentReplies,
  },

};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('CommentReplyList Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<CommentReplyList {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedCommentReplyList store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
});
