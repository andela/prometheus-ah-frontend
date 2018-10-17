import React from 'react';
import { shallow } from 'enzyme';
import FeaturedArticles from '../../../components/landingPage/featuredArticles/FeaturedArticles';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('LandingPage component', () => {
  beforeEach(() => {
    const { posts } = mockData;
    const props = {
      posts
    };

    wrapper = shallow(<FeaturedArticles {...props} />);
  });

  test('should render a snapshot of the userNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
