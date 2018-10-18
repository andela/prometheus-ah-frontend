import React from 'react';
import { shallow } from 'enzyme';
import { ArticleControlBtn, ReportBtn } from '../../../components/common/ArticleControlBtn';

describe('renders component correctly', () => {
  it('should render ArticleControlBtn', () => {
    const wrapper = shallow(<ArticleControlBtn />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ReportBtn', () => {
    const wrapper = shallow(<ReportBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
