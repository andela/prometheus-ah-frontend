import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignUpModal } from '../../../components/modals/SignUpModal';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  modal: { current: 'signUp' },
  onClick: jest.fn(),
  hideSignupModal: jest.fn(),
  closeModal: jest.fn(),
};
describe('Sign Up Modal Component', () => {
  it('should ', () => {
    const wrapper = shallow(<SignUpModal {...props}  />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.exists()).toBe(true);
  });
});
