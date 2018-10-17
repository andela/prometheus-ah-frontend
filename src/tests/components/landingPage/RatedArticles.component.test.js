import React from 'react';
import { shallow } from 'enzyme';
import RatedArticles from '../../../components/landingPage/ratedArticles/RatedArticles';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('RatedArticles component', () => {
  beforeEach(() => {
    const { posts } = mockData;
    const props = {
      posts
    };

    wrapper = shallow(<RatedArticles {...props} />);
  });

  test('should render a snapshot of the RatedArticles component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
