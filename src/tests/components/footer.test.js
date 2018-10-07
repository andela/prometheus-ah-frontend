import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {});
const wrapper = shallow(<Footer />);
it('renders the footer', () => {
  expect(wrapper.exists()).toBe(true);
  expect((wrapper).find('div').length).toBe(1);
  expect((wrapper).find('h4').length).toBe(1);
  expect((wrapper).find('p').length).toBe(1);
});
