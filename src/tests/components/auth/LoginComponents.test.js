import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../../components/auth/LoginForm';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('Login component', () => {
  beforeEach(() => {
    const props = {
      login: jest.fn(),
      auth: false,
      userProfile: jest.fn(),
    };
    wrapper = shallow(<LoginForm {...props} />);
  });

  it('should renders a snapshot of the app component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set username when username changes', () => {
    const event = {
      target: {
        name: 'username',
        value: 'faksam'
      }
    };

    const username = wrapper.find('.username');

    username.simulate('change', event);

    const expectedUsername = 'faksam';

    expect(wrapper.instance().state.username).toBe(expectedUsername);
  });

  it('should set password when password changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'awesomeGod'
      }
    };

    const password = wrapper.find('.password');

    password.simulate('change', event);

    wrapper.setState({ errors: { [event.target.name]: 'mock' } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.name])
      .toBe(event.target.value);
  });

  it('should login user when correct credentials are supplied', () => {
    const { loginData } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };

    const Login = wrapper.find('.submit');

    wrapper.setState(loginData);
    Login.simulate('click', event);
  });

  it('should return error for invalid form submission', () => {
    wrapper.find('.submit').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
});
