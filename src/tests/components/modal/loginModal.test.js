import React from 'react';
import { shallow } from 'enzyme';
import { LoginModal } from '../../../components/modals/LoginModal';

const props = {
  modal: { current: 'signUp' },
  onClick: jest.fn(),
  hideModal: jest.fn(),
  closeModal: jest.fn(),
};
describe('Sign Up Modal Component', () => {
  it('should ', () => {
    const wrapper = shallow(<LoginModal {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.exists()).toBe(true);
  });
});
