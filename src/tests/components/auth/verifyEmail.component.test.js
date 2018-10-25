import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { VerifyEmail } from '../../../components/auth/VerifyEmail';
import mockData from '../../__mocks__/mockData';

Enzyme.configure({ adapter: new Adapter() });

describe('Verify Email Component', () => {
  const { token } = mockData.authResponseEmail;
  const location = {
    search: {
      split: () => token
    }
  };
  const spy = sinon.spy(() => Promise.resolve());
  it('should render without throwing an error', () => {
    const wrapper = shallow(<VerifyEmail
      startVerifyEmailAction={spy}
      location={location}
      success="Your account has been successfully activated"
    />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should ', () => {
    const wrapper = shallow(<VerifyEmail startVerifyEmailAction={spy} location={location} />);
    wrapper.instance().emailCheckToken();
    expect(wrapper.exists()).toBe(true);
  });
});
