import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Profile from '../../../components/Profile';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
describe('Profile component', () => {
  beforeEach(() => {
    const props = {
      profile: {},
      articles: [{
        body: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        createdAt: '2018-10-02T12:07:45.830Z',
        description: 'why code in ruby',
        id: 3,
        readingTime: '3 min read',
        slug: 'how-coding-works',
        title: 'Coding',
        updatedAt: '2018-10-02T12:07:45.830Z',
        userId: 10,
      }],
      followers: {
        users: {
          message: 'You are yet to have followers.'
        }
      },
      following: {
        users: {
          message: 'You are yet to follow an Author.'
        }
      },
      userId: 10,
      bookmarks: {
        articles: [{
          body: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
          createdAt: '2018-10-02T12:07:45.830Z',
          description: 'why code in ruby',
          id: 3,
          readingTime: '3 min read',
          slug: 'how-coding-works',
          title: 'Coding',
          updatedAt: '2018-10-02T12:07:45.830Z',
          userId: 10,
        }],
        paginationMeta: {}
      }
    };
    wrapper = shallow(<Profile {...props} />);
  });

  it('should render the profile component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render articles cards and links', () => {
    expect((wrapper).find('ArticleCard').length).toBe(2);
  });
});
