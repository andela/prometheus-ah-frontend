import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '../../../components/common/TextField';

Enzyme.configure({ adapter: new Adapter() });


const props = {
  field: '',
  value: '',
  label: '',
  error: [],
  type: '',
  onChange: jest.fn(),
  id: '',
};


describe(' Textfield Component', () => {
  it('should ', () => {
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
