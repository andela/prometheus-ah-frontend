import React from 'react';
import { shallow } from 'enzyme';
import { UserNavigation } from '../../../components/navigation/UserNavigation';
import mockData from '../../__mocks__/mockData';


let wrapper;

describe('UserNavigation component', () => {
  beforeEach(() => {
    const { user } = mockData;
    const props = {
      logoutUser: jest.fn(),
      user
    };
    wrapper = shallow(<UserNavigation {...props} />);
  });

  test('should render a snapshot of the userNavigation component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders a snapshot of the userNavigation component', () => {
    // const logoutBtn = wrapper.find('#logout');
    wrapper.find('#logout').simulate('click', {
      preventDefault: jest.fn(),
    });

    wrapper.setState({
      user: {}
    });

    expect(wrapper.state('user')).toEqual({});
  });
});
