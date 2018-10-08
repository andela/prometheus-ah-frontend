import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../../components/Header';

Enzyme.configure({ adapter: new Adapter() });

const props = { auth: { isAuthenticated: 'truee' } };
describe('Header Component', () => {
  it('should the header component', () => {

    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
