import React from 'react';
import { shallow } from 'enzyme';
import BodyEditor from '../../../components/article/BodyEditor';
import TitleEditor from '../../../components/article/TitleEditor';


describe('Editor component', () => {
  it('should render Body Editor correctly', () => {
    const wrapper = shallow(<BodyEditor />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Title Editor correctly', () => {
    const wrapper = shallow(<TitleEditor />);
    expect(wrapper).toMatchSnapshot();
  });
});
