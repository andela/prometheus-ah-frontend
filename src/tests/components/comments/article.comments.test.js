import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedArticleComments,
{ ArticleComments } from '../../../components/comment/ArticleComments';
import mockData from '../../__mocks__/commentMockData';

const props = {
  loadCommentsAction: jest.fn(),
  article: mockData.articles[0],
  comments: mockData.comments,
  auth: true,
  error: {},
  user: {
    username: 'faksam'
  },
  paginationMeta: mockData.paginationMeta,
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
};
const initialState = {
  commentsArray: [],
  commentPage: 1,
  articleReducer: {
    article: mockData.articles[0],
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
  commentReducer: {
    comments: mockData.comments,
    paginationMeta: mockData.paginationMeta,
    commentReply: mockData.commentReplies[0],
    commentReplies: mockData.commentReplies,
  },
};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('ArticleComments Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ArticleComments {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should load more comments', () => {
    const wrapper = shallow(<ArticleComments {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({ commentPage: 1 });
    instance.loadMoreComments(event);
    expect(props.loadCommentsAction).toHaveBeenCalled();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedArticleComments store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
});
