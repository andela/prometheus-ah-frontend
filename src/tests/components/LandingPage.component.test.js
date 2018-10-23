import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../views/LandingPage';

let wrapper;

describe('LandingPage component', () => {
  beforeEach(() => {
    const props = {
      featuredArticles: [
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
      ],
      author: {
        featuredAuthor: {
          id: 2,
          username: 'faksam',
          firstname: null,
          lastname: null,
          image: null,
          articles: [
            {
              id: 23,
              slug: 'the-most-important-skill-nobody-taught-you',
              title: 'The most important skill nobody taught you',
              readingTime: '1 min read'
            }
          ]
        }
      },
      articles: [
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
        }
      ],
      actions: {
        fetchFeaturedArticles: jest.fn(),
        fetchArticles: jest.fn(),
        fetchAuthor: jest.fn()
      }
    };

    wrapper = shallow(<LandingPage {...props} />);
  });

  test('should render a snapshot of the userNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
