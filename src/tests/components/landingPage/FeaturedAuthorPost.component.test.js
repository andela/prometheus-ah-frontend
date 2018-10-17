import React from 'react';
import { shallow } from 'enzyme';
import FeaturedAuthorPost from '../../../components/landingPage/featuredAuthor/FeaturedAuthorPost';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('FeaturedAuthorPost component', () => {
  beforeEach(() => {
    const {
      title, image, readTime
    } = mockData.postProps;
    const props = {
      title, image, readTime
    };

    wrapper = shallow(<FeaturedAuthorPost {...props} />);
  });

  test('should render a snapshot of the FeaturedAuthorPost component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
