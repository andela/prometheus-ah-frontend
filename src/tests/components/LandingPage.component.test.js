import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../views/LandingPage';

let wrapper;

describe('LandingPage component', () => {
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  test('should render a snapshot of the userNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
