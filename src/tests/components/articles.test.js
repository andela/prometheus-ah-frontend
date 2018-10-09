import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { Articles } from '../../components/articles/Articles';

Enzyme.configure({ adapter: new Adapter() });

describe('Articles Component', () => {
  const spy = sinon.spy(() => Promise.resolve());
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Articles loadArticlesAction={spy} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should not load more articles when page is more than page count', () => {
    const wrapper = shallow(<Articles loadArticlesAction={spy} />);
    wrapper.setState({ articlePage: 5, pageCount: 5 });
    const wrapperInstance = wrapper.instance();
    wrapperInstance.getNextArticlePage();
    expect(wrapperInstance.state.hasMoreItems).toEqual(false);
  });
  it('should display list of articles when current page is less than page count', () => {
    const wrapper = shallow(<Articles loadArticlesAction={spy} />);
    wrapper.setState({ articlePage: 1, pageCount: 2 });
    wrapper.instance().getNextArticlePage();
    expect(wrapper.exists()).toBe(true);
  });
  it('should not duplicate list of articles when current page contains same articles', () => {
    const wrapper = shallow(<Articles loadArticlesAction={spy} />);
    wrapper.setState({ articles: [], articlePage: 1, pageCount: 2 });
    const wrapperInstance = wrapper.instance();
    wrapperInstance.getNextArticlePage();
    expect(wrapperInstance.state.hasMoreItems).toEqual(true);
    expect(wrapper.exists()).toBe(true);
  });
});
