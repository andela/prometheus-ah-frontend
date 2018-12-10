import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ConnectedLoginModal, { LoginModal } from '../../../components/modals/LoginModal';


const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

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

  it('should render connected component', () => {
    const wrapper = shallow(<ConnectedLoginModal store={store} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
