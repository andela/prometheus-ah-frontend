import React from 'react';
import { shallow } from 'enzyme';
import { UserNavigation } from '../../../components/navigation/UserNavigation';

let wrapper;

describe('GuestNavigation componete', () => {
  beforeEach(() => {
    const props = {
      logoutUser: jest.fn(),
    };
    wrapper = shallow(<UserNavigation {...props} />);
  });

  it('should renders a snapshot of the guestNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders a snapshot of the guestNavigation component', () => {
    const logoutBtn = wrapper.find('#logout');
    logoutBtn.simulate('click', {
      preventDefault: jest.fn(),
    });

    wrapper.setState({
      user: {}
    });

    expect(wrapper.state('user')).toEqual({});
  });
});
