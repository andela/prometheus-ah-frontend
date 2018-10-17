import React from 'react';
import { shallow } from 'enzyme';
import FeaturedAuthor from '../../../components/landingPage/featuredAuthor/FeaturedAuthor';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('FeaturedAuthor component', () => {
  beforeEach(() => {
    const {
      posts, user: author
    } = mockData;
    const props = {
      posts, author
    };

    wrapper = shallow(<FeaturedAuthor {...props} />);
  });

  test('should render a snapshot of the FeaturedAuthor component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
