import React from 'react';
import { shallow } from 'enzyme';
import FeaturedAuthor from '../../../components/landingPage/featuredAuthor/FeaturedAuthor';

let wrapper;

describe('FeaturedAuthor component', () => {
  beforeEach(() => {
    const props = {
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
      }
    };

    wrapper = shallow(<FeaturedAuthor {...props} />);
  });

  test('should render a snapshot of the FeaturedAuthor component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
