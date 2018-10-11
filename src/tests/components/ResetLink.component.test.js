import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ResetPassword from '../../components/ResetLink';
import mockData from '../__mocks__/mockData';


let resetPasswordRequest;
let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('Reset Email Link', () => {
  beforeEach(() => {
    const { email } = mockData.userEmail;
    const store = createMockStore({});
    resetPasswordRequest = jest.fn();
    wrapper = shallow(
      <ResetPassword.WrappedComponent
        resetPasswordRequest={resetPasswordRequest}
        resetEmail={email}
        store={store}
      />
    );
  });

  test('should correctly render Reset Email link ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call resetPasswordRequest on click of the link', () => {
    const { email } = mockData.userEmail;
    wrapper.find('.alert-link').simulate('click', {
      preventDefault: () => {}
    });
    expect(resetPasswordRequest).toHaveBeenCalledWith(email);
    expect(wrapper).toMatchSnapshot();
  });
});
