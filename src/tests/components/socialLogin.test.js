import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';

Enzyme.configure({ adapter: new Adapter() });

describe('social login container', () => {
  const wrapper = shallow(<SocialLogin />);
  it('renders the social login buttons', () => {
    expect(wrapper.exists()).toBe(true);
    expect((wrapper).find('div').length).toBe(3);
    expect((wrapper).find('.btn').length).toBe(2);
    expect((wrapper).find(Link).length).toBe(2);
  });
});
