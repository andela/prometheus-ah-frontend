import React from 'react';
import { shallow } from 'enzyme';
import FeaturedArticles from '../../../components/landingPage/featuredArticles/FeaturedArticles';

let wrapper;

describe('LandingPage component', () => {
  beforeEach(() => {
    const props = {
      posts: [
        {
          id: 23,
          slug: 'nobody-taught-you',
          title: 'nobody taught you',
          body: 'Before dying at the age of 39, Blaise Pascal',
          userId: 2,
          description: 'all our problems',
          readingTime: '1 min read',
          createdAt: '2018-10-20T12:21:33.812Z',
          updatedAt: '2018-10-20T12:21:33.812Z',
          User: {
            username: 'faksam',
            firstname: null,
            lastname: null
          },
          Tags: [
            {
              name: 'Self'
            }
          ]
        },
      ]
    };

    wrapper = shallow(<FeaturedArticles {...props} />);
  });

  test('should render a snapshot of the userNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
