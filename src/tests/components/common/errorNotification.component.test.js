import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorAlertNotification from '../../../components/common/ErrorAlertNotification';

Enzyme.configure({ adapter: new Adapter() });

describe('Error Alert Notification Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ErrorAlertNotification errors="iamerror" onClick={jest.fn()} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.exists()).toBe(true);
  });
  it('should ', () => {
    const wrapper = shallow(<ErrorAlertNotification />);
    expect(wrapper.exists()).toBe(true);
  });
});
