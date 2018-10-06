import { shallow } from 'enzyme';
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedEditArticle,
{ EditArticle } from '../../../components/article/EditArticle';

const props = {
  editUserArticle: jest.fn().mockResolvedValue(Promise.resolve()),
  article: {
    Tags: [],
    User: {
      bio: 'I am a test',
      email: 'test@test.com',
      firstname: 'Testing',
      id: 5,
      image: 'string',
      lastname: 'Component',
      role: 'user',
      status: 'active',
      username: 'test'
    },
    title: 'new title',
    body: 'new body',
    description: 'new description',
    slug: 'new-article',
    createdAt: '2018-10-17T13:30:43.350Z',
    id: 83,
    readingTime: '1 min read',
    updatedAt: '2018-10-17T13:30:43.350Z',
    userId: 5
  },
  match: {
    params: {
      slug: '/new-article'
    }
  },
  location: { pathname: '/new-article' },
  history: {},
  update: {
    title: 'new edited',
    body: 'new edited body',
    description: 'new edited description'
  }
};
const mockStore = configureMockStore([thunk]);
const initialState = {
  articleReducer: {
    articles: [{
      title: 'new title',
      body: 'new body',
      description: 'new description',
      slug: 'new-1'
    }, {
      title: 'new title',
      body: 'new body',
      description: 'new description',
      slug: 'new-2'
    }],
  }
};
const store = mockStore(initialState);

describe('Edit article component', () => {
  it('should redirect to read article page correctly', () => {
    const wrapper = shallow(<EditArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toBeTruthy();
  });
  it('should display the necessary element', () => {
    const newProps = {
      editUserArticle: jest.fn(),
      article: {
        Tags: [],
        User: {
          bio: 'I am a test',
          email: 'test@test.com',
          firstname: 'Testing',
          id: 5,
          image: 'string',
          lastname: 'Component',
          role: 'user',
          status: 'active',
          username: 'test'
        },
        title: 'new title',
        body: 'new body',
        description: 'new description',
        slug: 'new-article',
        createdAt: '2018-10-17T13:30:43.350Z',
        id: 83,
        readingTime: '1 min read',
        updatedAt: '2018-10-17T13:30:43.350Z',
        userId: 5
      },
      match: {
        params: {
          slug: '/new-article'
        }
      },
      location: { pathname: '/new-article' },
      history: {},
    };
    const wrapper = shallow(
      <EditArticle {...newProps} />
    );
    expect(wrapper.find('div').exists()).toBe(true);
  });
  it('should call editArticle on submit', () => {
    const wrapper = shallow(<EditArticle {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit();
    expect(props.editUserArticle).toHaveBeenCalled();
  });
  it('should set update to state after edit article succeed', () => {
    const wrapper = shallow(<ConnectedEditArticle store={store} {...props} />);
    expect(props.update).toEqual({
      body: 'new edited body',
      description: 'new edited description',
      title: 'new edited'
    });
    expect(wrapper.state()).toEqual({});
  });
});
