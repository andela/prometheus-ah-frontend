import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultModal, { Modal } from '../../../components/modals/Modal';


const props = { modal: { current: 'signUp' } };
const initialState = {
  modal: {
    current: null
  }
};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);
describe('Modal Component', () => {
  it('should ', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should set state to props', () => {
    const wrapper = shallow(<DefaultModal store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
    expect(props.modal).toBeTruthy();
  });
});
