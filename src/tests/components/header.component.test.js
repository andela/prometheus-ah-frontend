import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let wrapper;

describe('Header Component', () => {
  beforeEach(() => {
    const props = {
      logout: jest.fn(),
      showModal: jest.fn(),
      showModalSignup: jest.fn()
    };

    wrapper = shallow(<Header {...props} />);
  });

  it('should render the header component correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GuestNavigation').exists()).toBe(true);
    expect(wrapper.find('UserNavigation').exists()).toBe(false);
  });

  it('should render a component', () => {
    const props = {
      auth: true,
      logout: jest.fn(),
      showModal: jest.fn(),
      showModalSignup: jest.fn()
    };
    const wrapper1 = shallow(<Header {...props} />);

    expect(wrapper1).toMatchSnapshot();
    expect(wrapper1.find('GuestNavigation').exists()).toBe(false);
    expect(wrapper1.find('UserNavigation').exists()).toBe(false);
  });
});
