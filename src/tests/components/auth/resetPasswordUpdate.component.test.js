import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockData from '../../__mocks__/mockData';
import ResetPasswordUpdatePage from '../../../components/auth/ResetPasswordUpdate';

let resetPasswordUpdate;
let location;
let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('Reset Password Update', () => {
  beforeEach(() => {
    const { passwordtoken } = mockData;
    const store = createMockStore({});
    resetPasswordUpdate = jest.fn(() => Promise.resolve());
    location = { search: passwordtoken };
    wrapper = shallow(
      <ResetPasswordUpdatePage.WrappedComponent
        resetPasswordUpdate={resetPasswordUpdate}
        location={location}
        store={store}
      />
    );
  });

  test('should correctly render ResetPasswordUpdatePage ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should set password on input change', () => {
    const { password } = mockData;
    const name = 'password';
    const value = password;
    wrapper
      .find('.form-input')
      .at(0)
      .simulate('change', {
        target: { name, value }
      });
    expect(wrapper.state(name)).toBe(value);
  });

  test('should set password_confirmation on input change', () => {
    const { password } = mockData;
    const name = 'password_confirmation';
    const value = password;
    wrapper
      .find('.form-input')
      .at(1)
      .simulate('change', {
        target: { name, value }
      });
    expect(wrapper.state(name)).toBe(value);
  });

  test('should return error for invalid form submission', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });

  test('should call resetPasswordUpdate props for valid form submission', () => {
    const { password, passwordtoken } = mockData;
    const data = {
      password,
      password_confirmation: password,
      passwordtoken
    };

    const token = passwordtoken.split('=')[1];
    wrapper.setState(data);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(resetPasswordUpdate).toHaveBeenCalledWith({
      password,
      password_confirmation: password,
      passwordtoken: token
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should call the dispatch mapped to the props', () => {
    const store = createMockStore({});
    const wrapper2 = shallow(
      <ResetPasswordUpdatePage store={store} location={location} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
