import React from 'react';
import { shallow } from 'enzyme';
import EmptyImage from '../../../components/article/EmptyImage';


describe('Editor component', () => {
  it('should render Image placeholder correctly', () => {
    const wrapper = shallow(<EmptyImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
