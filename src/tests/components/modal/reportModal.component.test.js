import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ReportModal } from '../../../components/modals/ReportModal';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  modal: { current: 'report' },
  onClick: jest.fn(),
  hideReportModal: jest.fn(),
  closeModal: jest.fn(),
  postReport: [
    {
      0:
        {
          id: 1,
          title: 'Plagiarised',
          description: 'Plagiarism content from this link',
          deletedAt: null,
          createdAt: '2018-10-17T13:30:51.520Z'
        },

      1:
        {
          id: 2,
          title: 'Violate terms of agreement',
          description: 'Violates terms of agreement in section 2.7',
          deletedAt: null,
          createdAt: '2018-10-17T13:30:51.520Z'
        }
    }
  ]
};
describe('Report Article Component', () => {
  it('should verify if the report article exist', () => {
    const wrapper = shallow(<ReportModal {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.exists()).toBe(true);
  });
});
