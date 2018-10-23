import React from 'react';
import { shallow } from 'enzyme';
import FeaturedArticles from '../../../components/landingPage/featuredArticles/FeaturedArticle';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('FeaturedArticles component', () => {
  beforeEach(() => {
    const {
      active, image, title, date, category, description, readTime
    } = mockData.postProps;

    const props = {
      active,
      image,
      title,
      date,
      category,
      description,
      readTime,
      author: {
        username: 'faksam',
        firstname: null,
        lastname: null
      }
    };

    wrapper = shallow(<FeaturedArticles {...props} />);
  });

  test('should render a snapshot of the FeaturedArticles component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
