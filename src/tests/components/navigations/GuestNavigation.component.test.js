import React from 'react';
import { shallow } from 'enzyme';
import GuestNavigation from '../../../components/navigation/GuestNavigation';

let wrapper;

describe('GuestNavigation componete', () => {
  beforeEach(() => {
    const props = {
      showLoginModal: jest.fn(),
      showSignupModal: jest.fn(),
      modal: {},
    };
    wrapper = shallow(<GuestNavigation {...props} />);
  });

  it('should renders a snapshot of the guestNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
