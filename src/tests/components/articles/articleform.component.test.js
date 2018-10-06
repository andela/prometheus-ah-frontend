import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import ConnectedArticleForm, { ArticleForm } from '../../../components/article/ArticleForm';
import BodyEditor from '../../../components/article/BodyEditor';
import TitleEditor from '../../../components/article/TitleEditor';
import DescriptionEditor from '../../../components/article/DescriptionEditor';

const mockStore = configureMockStore([thunk]);
const props = {
  fetchSingleArticle: jest.fn(),
  onSubmit: jest.fn(),
};
const initialState = {
  title: 'Title',
  body: 'new body',
  description: 'Write a short description of your story',
  tag: '',
  tagList: ['tagA'],
};
const store = mockStore(initialState);
describe('Article Form component', () => {
  it('should render Article Form correctly', () => {
    const wrapper = shallow(<ArticleForm />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set a new state when body changes', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const editor = wrapper.find(BodyEditor);
    editor.dive().simulate('EditorChange', 'new value');
    expect(wrapper.state().body).toEqual('new value');
  });
  it('should set a new state when description changes', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const description = wrapper.find(DescriptionEditor);
    description.dive().simulate('EditorChange', 'new description');
    expect(wrapper.state().description).toEqual('new description');
  });
  it('should set a new state when title changes', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const title = wrapper.find(TitleEditor);
    title.dive().simulate('EditorChange', 'new title');
    expect(wrapper.state().title).toEqual('new title');
  });
  it('should set a new state when title is focused in', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const title = wrapper.find(TitleEditor);
    title.dive().simulate('FocusIn');
    expect(wrapper.state().title).toEqual('');
  });
  it('should set a new state when title is focused out', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    wrapper.setState({ title: '' });
    const title = wrapper.find(TitleEditor);
    title.dive().simulate('FocusOut');
    expect(wrapper.state().title).toEqual('Title');
  });
  it('should set a new state when description is focused in', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const description = wrapper.find(DescriptionEditor);
    description.dive().simulate('FocusIn');
    expect(wrapper.state().description).toEqual('');
  });
  it('should set a new state when description is focused out', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    wrapper.setState({ description: '' });
    const description = wrapper.find(DescriptionEditor);
    description.dive().simulate('FocusOut');
    expect(wrapper.state().description).toEqual('Write a short description of your story');
  });
  it('should set a new state when body is focused in', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const body = wrapper.find(BodyEditor);
    body.dive().simulate('FocusIn');
    expect(wrapper.state().body).toEqual('');
  });
  it('should set a new state when body is focused out', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    wrapper.setState({ body: '' });
    const body = wrapper.find(BodyEditor);
    body.dive().simulate('FocusOut');
    expect(wrapper.state().body).toEqual('Write your story...');
  });
  it('should set a new state onsubmit is passed', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const data = {
      title: 'new article',
      body: 'new body',
      description: 'new description',
      tagList: [],
    };
    wrapper.setState(data);
    const submitForm = wrapper.find('form');

    submitForm.simulate('submit', {
      preventDefault: () => {}
    });
    expect(props.onSubmit).toHaveBeenCalledWith(data);
  });
  it('should set a new state when a new tag is entered', () => {
    const wrapper = shallow(<ArticleForm {...props} />);
    const tag = wrapper.find('TagsInput');
    tag.simulate('ChangeInput', 'tag');
    expect(wrapper.state().tag).toEqual('tag');
  });
  it('should set a new state when tag is set in the state', () => {
    const wrapper = shallow(<ArticleForm store={store} {...props} />);
    const tag = wrapper.find('TagsInput');
    tag.simulate('change', 'tag a');
    wrapper.setState({ tagList: ['tag a'] });
    expect(wrapper.state().tagList).toEqual(['tag a']);
  });
  it('should fetch new data when match is passed', () => {
    const props = { // eslint-disable-line
      fetchSingleArticle: jest.fn().mockResolvedValue(Promise.resolve({
        data: {
          article: {
            Tags: [{ id: 1, name: 'writing' }, { id: 2, name: 'reading' }],
            description: 'test',
            body: 'body',
            title: 'title',
          }
        }
      })),
      onSubmit: jest.fn(),
      match: {
        params: {
          slug: 'new-article'
        }
      }
    };
    const wrapper = shallow(<ArticleForm {...props} />);
    wrapper.setState({
      tagList: ['writing', 'reading'],
      description: 'test',
      body: 'body',
      title: 'title',


    });
    expect(props.fetchSingleArticle).toHaveBeenCalled();
    expect(wrapper.state()).toEqual({
      title: 'title',
      body: 'body',
      description: 'test',
      tag: '',
      tagList: ['writing', 'reading'],
    });
  });
  it('should set article to state after create article succeed', () => {
    const wrapper = shallow(<ConnectedArticleForm store={store} {...props} />);
    wrapper.setState({
      title: 'new title',
      body: 'new body',
      description: 'new description',
    });
    expect(wrapper.state()).toEqual({
      title: 'new title',
      body: 'new body',
      description: 'new description',
    });
  });
});
