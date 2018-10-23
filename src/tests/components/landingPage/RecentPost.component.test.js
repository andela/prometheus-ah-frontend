import React from 'react';
import { shallow } from 'enzyme';
import RecentPost from '../../../components/landingPage/recentPosts/RecentPost';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('RecentPost component', () => {
  beforeEach(() => {
    const {
      image, title, date, category, readTime,
    } = mockData.postProps;
    const props = {
      image,
      title,
      date,
      category,
      readTime,
      author: {
        username: 'faksam',
        firstname: null,
        lastname: null
      }
    };

    wrapper = shallow(<RecentPost {...props} />);
  });

  test('should render a snapshot of the RecentPost component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
