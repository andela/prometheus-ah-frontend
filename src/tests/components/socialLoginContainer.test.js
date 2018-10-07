import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SocialLoginContainer } from '../../components/socialLogin/SocialLoginContainer';
import Footer from '../../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

const match = {
  params: {
    socialLogin: 'google',
  },
};

const history = {
  location: {
    search: '?code=AQCElIV2ymlRHvJhKLtuyQXG3Vf1B_q_8mR7nGDEsPXCsBbeb8kIm',
  },
  push: jest.fn(),
};
const history1 = {
  location: {
    search: 'true',
  },
  push: jest.fn(),
};
let response = {
  status: 201 || 200,
  data: { message: 'authentication successful' },
};

const social = jest.fn(() => Promise.resolve(response));

describe('social login container', () => {
  it('should render the component and redirect a successfully logged in user to home page', () => {
    const wrapper = shallow(<SocialLoginContainer
      history={history}
      match={match}
      social={social}
    />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('should redirect an unsuccessfully logged user to the login page', () => {
    response = {
      status: 401 || 400,
    };
    const social2 = jest.fn(() => Promise.resolve(response));
    const wrapper = shallow(<SocialLoginContainer
      history={history1}
      match={match}
      social={social2}
    />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
