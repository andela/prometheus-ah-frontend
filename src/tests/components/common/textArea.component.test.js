import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextArea from '../../../components/common/TextArea';

Enzyme.configure({ adapter: new Adapter() });


const props = {
  field: '',
  value: '',
  label: '',
  error: '',
  onChange: jest.fn(),
};


describe(' Textfield Component', () => {
  it('should ', () => {
    const wrapper = shallow(<TextArea {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
