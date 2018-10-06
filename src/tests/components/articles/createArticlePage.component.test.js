import { shallow } from 'enzyme';
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedCreateArticle,
{ CreateArticlePage } from '../../../components/article/CreateArticlePage';

const props = {
  createArticle: jest.fn().mockResolvedValue(Promise.resolve({
    data: {
      article: {
        title: 'new title',
        body: 'new body',
        description: 'new description',
        slug: 'new-article'
      }
    }
  })),
  match: { path: '/new-article' },
  location: { pathname: '/new-article' },
  history: {},
};
const mockStore = configureMockStore([thunk]);
const initialState = {
  articleReducer: {
    reqStatus: {
      article: {
        title: 'new title',
        body: 'new body',
        description: 'new description'
      }
    }
  }
};
const store = mockStore(initialState);

describe('Create article component', () => {
  it('should render create article page correctly', () => {
    const wrapper = shallow(<CreateArticlePage {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toBeTruthy();
  });
  it('should display the necessary element', () => {
    const newProps = {
      match: { path: '/new-article' },
      location: { pathname: '/new-article' },
      history: {},
    };
    const wrapper = shallow(
      <CreateArticlePage {...newProps} />
    );
    expect(wrapper.find('div').exists()).toBe(true);
  });
  it('should call createArticle on submit', () => {
    const wrapper = shallow(<CreateArticlePage {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit();
    expect(props.createArticle).toHaveBeenCalled();
  });
  it('should redirect when article is created', () => {
    const wrapper = shallow(<CreateArticlePage {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit();
    expect(props.createArticle).toHaveBeenCalled();
  });
  it('should call create article function', () => {
    const wrapper = shallow(<CreateArticlePage store={store} {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit();
    expect(props.createArticle).toHaveBeenCalled();
  });
  it('should set article to state after create article succeed', () => {
    const wrapper = shallow(<ConnectedCreateArticle store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
});
