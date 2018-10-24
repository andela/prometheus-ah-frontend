import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedCommentReplyRow,
{ CommentReplyRow } from '../../../components/comment/CommentReplyRow';
import mockData from '../../__mocks__/commentMockData';

const props = {
  deleteCommentAction: jest.fn(),
  updateCommentAction: jest.fn(),
  loadCommentsAction: jest.fn(),
  article: mockData.articles[0],
  comment: mockData.comments.comments[0],
  auth: true,
  error: {},
  username: 'faksam',
  reply: {
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
    },
  ],
};
const initialState = {
  articleReducer: {
    article: mockData.articles[0],
  },
  commentReducer: {
    reply: mockData.commentReplies[0],
    commentReply: mockData.commentReplies[0],
    commentReplies: mockData.commentReplies,
  },
  auth: {
    error: {},
    user: {
      username: 'joeeasy',
      email: 'joeeasy@gmail.com',
      bio: 'tomorrow is a better day',
      id: 1,
      isVerified: true,
      role: 'user'
    }
  },
};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('CommentReplyRow Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should update a specific comment reply', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ editBody: 'Samuel is a boy' });
    instance.isValid();
    instance.onSubmit(event);
    expect(props.updateCommentAction).toHaveBeenCalled();
  });

  it('should not update a reply when reply body is empty', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    const instance = wrapper.instance();
    wrapper.setState({ editBody: '' });
    expect(instance.isValid()).toBe(false);
  });
  it('should delete a comment reply', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    instance.handleCommentDelete(event);
    expect(props.deleteCommentAction).toHaveBeenCalled();
  });
  it('should start editing a comment reply', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    instance.handleCommentEdit(event);
    expect(wrapper.state().editing).toEqual(true);
  });
  it('should cancel comment reply editing', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    instance.handleCommentEditCancel(event);
    expect(wrapper.state().editing).toEqual(false);
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedCommentReplyRow store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });

  it('should set reply body when the reply body changes', () => {
    const wrapper = shallow(<CommentReplyRow {...props} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        id: 'editBody',
        value: 'This is a comment'
      }
    };
    wrapper.setState({ errors: { [event.target.id]: 'mock' } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.id])
      .toBe(event.target.value);
  });
});
