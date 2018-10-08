import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../components/auth/LoginForm';
import mockData from '../__mocks__/mockData';

let wrapper;

describe('Login component', () => {
  beforeEach(() => {
    const props = {
      login: jest.fn(),
      auth: false,
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

    const username = wrapper.find('#username');

    username.simulate('change', event);

    const expectedUsername = 'faksam';

    expect(wrapper.instance().state.username).toBe(expectedUsername);
  });

  it('should set password when password changes', () => {
    const event = {
      target: {
        name: 'password',
        value: '90123456'
      }
    };

    const password = wrapper.find('#password');

    password.simulate('change', event);

    const expectedPassword = '90123456';

    expect(wrapper.instance().state.password).toBe(expectedPassword);
  });

  it('should login user when correct creadentials are supplied', () => {
    const { loginData } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };

    const Login = wrapper.find('#submit');

    wrapper.setState(loginData);
    Login.simulate('click', event);
  });

  it('should return error for invalid form submission', () => {
    wrapper.find('#submit').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
});
