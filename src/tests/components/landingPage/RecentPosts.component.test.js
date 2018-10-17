import React from 'react';
import { shallow } from 'enzyme';
import RecentPost from '../../../components/landingPage/recentPosts/RecentPosts';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('RecentPost component', () => {
  beforeEach(() => {
    const { posts } = mockData;
    const props = {
      posts
    };

    wrapper = shallow(<RecentPost {...props} />);
  });

  test('should render a snapshot of the RecentPost component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
