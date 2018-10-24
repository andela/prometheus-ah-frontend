import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedCommentForm,
{ CommentForm } from '../../../components/comment/CommentForm';
import mockData from '../../__mocks__/commentMockData';

const props = {
  loadCommentsAction: jest.fn(),
  createCommentAction: jest.fn(),
  article: mockData.articles[0],
  username: 'faksam',
};
const initialState = {
  articleReducer: {
    article: mockData.articles[0],
  },
  auth: {
    isAuthenticated: true,
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
  commentReducer: {
    comments: mockData.comments,
    commentReply: mockData.commentReplies[0],
    commentReplies: mockData.commentReplies,
  },

};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('CommentForm Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<CommentForm {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should not create an empty article', () => {
    const wrapper = shallow(<CommentForm {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ body: '' });
    expect(instance.isValid()).toBe(false);
    instance.onSubmit(event);
  });
  it('should a new comment', () => {
    const wrapper = shallow(<CommentForm {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ body: 'Samuel is a boy' });
    expect(instance.isValid()).toBe(true);
    instance.onSubmit(event);
  });
  it('should close error alert', () => {
    const wrapper = shallow(<CommentForm {...props} />);
    const instance = wrapper.instance();
    instance.handleCloseError();
  });
  it('should set comment body when comment form body changes', () => {
    const wrapper = shallow(<CommentForm {...props} />);
    const event = {
      preventDefault: jest.fn(),
      target: {
        id: 'body',
        value: 'This is a comment'
      }
    };
    wrapper.setState({ errors: { [event.target.id]: 'mock' } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.id])
      .toBe(event.target.value);
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedCommentForm store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
});
