import React from 'react';
import { shallow } from 'enzyme';
import RatedArticle from '../../../components/landingPage/ratedArticles/RatedArticle';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('RecentPost component', () => {
  beforeEach(() => {
    const {
      title, body, author, date, active
    } = mockData.postProps;
    const props = {
      title, body, author, date, active
    };

    wrapper = shallow(<RatedArticle {...props} />);
  });

  test('should render a snapshot of the RecentPost component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
