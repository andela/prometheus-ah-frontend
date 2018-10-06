import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';


describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('renders a snapshot of the app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
