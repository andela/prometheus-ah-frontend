import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Modal } from '../../../components/modals/Modal';

Enzyme.configure({ adapter: new Adapter() });

const props = { modal: { current: 'signUp' } };
describe('Modal Component', () => {
  it('should ', () => {
    // const { current } = props.modal

    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
