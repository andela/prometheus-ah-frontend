import configureMockStore from 'redux-mock-store';
import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultReadArticle, { ReadArticle } from '../../../components/article/ReadArticle';

const mockStore = configureMockStore([thunk]);
describe('Read Article component', () => {
  let wrapper, store, props, initialState;
  beforeEach(() => {
    props = {
      article: {
        Tags: ['tag a', 'tag b'],
        User: {
          email: null,
          firstname: null,
          id: 5,
          image: null,
          lastname: null,
          reset_password_hash: null
        },
        body: '<p>The story started few years back</p>',
        createdAt: '2018-10-15T11:27:58.250Z',
        description: '<p>the description</p>',
        id: 71,
        readingTime: '1 min read',
        slug: 'new-article',
        title: 'new article',
        updatedAt: '2018-10-15T11:27:58.250Z',
        userId: 5
      },
      comment: {
        id: 179,
        createdAt: '2018-10-23T08:41:31.073Z',
        updatedAt: '2018-10-23T08:41:31.073Z',
        body: 'Life is a race what do I do?',
        User: {
          username: 'faksam',
          email: 'fakunlesamuel@gmail.com',
          image: null
        }
      },
      user: {
        userId: 5
      },
      fetchSingleArticle: jest.fn().mockResolvedValue(Promise.resolve()),
      deleteUserArticle: jest.fn().mockResolvedValue(Promise.resolve()),
      loadCommentsAction: jest.fn(),
      likeStatus: jest.fn(),
      articleLikesCount: jest.fn(),
      likeArticle: jest.fn(() => Promise.resolve({ status: 200 })),
      unlikeArticle: jest.fn(() => Promise.resolve()),
      auth: {
        isAuthenticated: true,
        user: {
          username: 'joe'
        }
      },
      count: [],
      match: {
        params: { slug: 'new-article' },
        url: '/articles/new-article'
      },
      location: { pathname: '/articles/new-article' },
      history: {},
      style: {
        display: {
          modal: {
            current: 'report'
          },
        },
      },
      showReportModal: jest.fn(),
      getUserReport: jest.fn(),
      reported: {
        reports: {}
      }
    };
    initialState = {
      postReport: {
        reports: {}
      },
      modal: {
        current: null,
      },
      auth: {
        isAuthenticated: false,
        user: {
          username: 'joe',
          userId: 5
        }
      },
      articleReducer: {
        articles: [
          {
            Tags: ['tag a', 'tag b'],
            User: {
              email: null,
              firstname: null,
              id: 5,
              image: null,
              lastname: null,
              reset_password_hash: null
            },
            body: '<p>The story started few years back</p>',
            createdAt: '2018-10-15T11:27:58.250Z',
            description: '<p>the description</p>',
            id: 71,
            readingTime: '1 min read',
            slug: 'new-article',
            title: 'Writing a new article',
            updatedAt: '2018-10-15T11:27:58.250Z',
            userId: 5
          }, {
            Tags: ['tag a', 'tag b'],
            User: {
              email: null,
              firstname: null,
              id: 5,
              image: null,
              lastname: null,
              reset_password_hash: null
            },
            body: '<p>The story started few years back when i was</p>',
            createdAt: '2018-10-15T11:27:58.250Z',
            description: '<p>the description of new article</p>',
            id: 71,
            readingTime: '1 min read',
            slug: 'new-article-edited',
            title: 'Writing a new article in a new dimension',
            updatedAt: '2018-10-15T11:27:58.250Z',
            userId: 5
          }
        ]
      },
      commentReducer: {
        comments: {
          paginationMeta: {
            currentPage: 1,
            pageSize: 10,
            totalCount: 5,
            resultCount: 5,
            pageCount: 1
          },
          comments: {
            0: {
              id: 179,
              createdAt: '2018-10-23T08:41:31.073Z',
              updatedAt: '2018-10-23T08:41:31.073Z',
              body: 'This article is correct edit',
              User: {
                username: 'faksam',
                email: 'fakunlesamuel@gmail.com',
                image: null
              }
            },
            1: {
              id: 179,
              createdAt: '2018-10-23T08:41:31.073Z',
              updatedAt: '2018-10-23T08:41:31.073Z',
              body: 'Life is a race what do I do?',
              User: {
                username: 'faksam',
                email: 'fakunlesamuel@gmail.com',
                image: null
              }
            },
            2: {
              id: 179,
              createdAt: '2018-10-23T08:41:31.073Z',
              updatedAt: '2018-10-23T08:41:31.073Z',
              body: 'This article is hot',
              User: {
                username: 'faksam',
                email: 'fakunlesamuel@gmail.com',
                image: null
              }
            },
          },
          commentsCount: 5
        },
      }
    };
    store = mockStore(initialState);
  });

  it('should render Article page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('ComponentDidMount', () => {
    const props = { // eslint-disable-line
      article: null,
      fetchSingleArticle: jest.fn().mockResolvedValue(Promise.resolve()),
      loadCommentsAction: jest.fn(),
      articleLikesCount: jest.fn(),
      likeArticle: jest.fn(),
      likeStatus: jest.fn(),
      unlikeArticle: jest.fn(),
      auth: {
        isAuthenticated: false,
      },
      count: 0,
      match: {
        params: { slug: 'new-article' },
        url: '/articles/new-article'
      },
      location: { pathname: '/articles/new-article' },
      history: {}
    };
    wrapper = shallow(<ReadArticle store={store} {...props} />);
    expect(props.fetchSingleArticle).toHaveBeenCalled();
    expect(props.loadCommentsAction).toHaveBeenCalled();
  });

  it('should display the necessary element', () => {
    wrapper = shallow(<ReadArticle {...props} />);
    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.find('div').length).toEqual(27);
  });

  it('Display loading if no article', () => {
    const newProp = {
      user: {
        userId: 5
      },
      auth: {
        isAuthenticated: false,
      },
      fetchSingleArticle: jest.fn().mockResolvedValue(Promise.resolve()),
      deleteUserArticle: jest.fn().mockResolvedValue(Promise.resolve()),
      loadCommentsAction: jest.fn(),
      articleLikesCount: jest.fn(),
      likeStatus: jest.fn(),
      match: {
        params: { slug: 'new-article' },
        url: '/articles/new-article'
      },
      location: { pathname: '/articles/new-article' },
      history: {},
      style: {
        display: {
          modal: {
            current: 'report'
          },
        },
      },
      showReportModal: jest.fn(),
      getUserReport: jest.fn(),
    };
    wrapper = shallow(<ReadArticle {...newProp} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loading')).toBeDefined();
    expect(wrapper.find('div').length).toBe(2);
    expect(newProp.fetchSingleArticle).toHaveBeenCalled();
  });
  it('should call the delete function on delete', () => {
    wrapper = shallow(<ReadArticle {...props} />);
    const instance = wrapper.instance();
    instance.handleDelete();
    expect(props.deleteUserArticle).toHaveBeenCalled();
  });
  it('should set state to props', () => {
    wrapper = shallow(<DefaultReadArticle store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
    expect(props.article).toBeTruthy();
    expect(props.user).toBeTruthy();
  });
  it('should call handleDelete function on click', () => {
    wrapper = shallow(<ReadArticle {...props} />);
    const instance = wrapper.instance();
    instance.onDelete();
    expect(props.deleteUserArticle).toHaveBeenCalled();
  });

  it('should like an article on click', () => {
    store = mockStore({});
    wrapper = shallow(<ReadArticle store={store} {...props} />);
    wrapper.find('Like').at(0).simulate('click');
    expect(props.likeArticle).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
