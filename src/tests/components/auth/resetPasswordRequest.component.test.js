import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ResetPasswordRequest from '../../../components/auth/ResetPasswordRequest';
import mockData from '../../__mocks__/mockData';

let resetPasswordRequest;
let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('ResetPasswordRequest', () => {
  beforeEach(() => {
    resetPasswordRequest = jest.fn(() => Promise.resolve());
    wrapper = shallow(
      <ResetPasswordRequest.WrappedComponent
        resetPasswordRequest={resetPasswordRequest}
      />
    );
  });

  test('should correctly render ResetPasswordRequestPage ', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render ResetPasswordRequestPage ', () => {
    wrapper.setState({ emailValid: true });
    expect(wrapper).toMatchSnapshot();
  });

  test('should set email on input change', () => {
    const { signUpDetails } = mockData;
    const name = 'email';
    const value = signUpDetails.email;
    wrapper
      .find('TextField')
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

  test('should return error for invalid form submission', () => {
    resetPasswordRequest = jest.fn(() => Promise.reject());
    const wrapper3 = shallow(
      <ResetPasswordRequest.WrappedComponent resetPasswordRequest={resetPasswordRequest} />
    );
    wrapper3.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper3.state('error')).not.toBe({});
    expect(wrapper3).toMatchSnapshot();
  });

  test('should call resetPasswordRequest props for valid form submission', () => {
    const { signUpDetails } = mockData;
    const data = { email: signUpDetails.email };
    wrapper.setState(data);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(resetPasswordRequest).toHaveBeenCalledWith(signUpDetails.email);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call the dispatch mapped to the props', () => {
    const props = {
      resetPasswordRequest: jest.fn(() => Promise.resolve())
    };
    const store = createMockStore({});
    const wrapper2 = shallow(
      <ResetPasswordRequest store={store} {...props} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
