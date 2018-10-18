import configureMockStore from 'redux-mock-store';
import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultReportForm, { ReportForm } from '../../../components/report/ReportForm';

const mockStore = configureMockStore([thunk]);
const props = {
  article: {
    Tags: [],
    User: {
      email: null,
      firstname: null,
      id: 5,
      image: null,
      lastname: null,
      reset_password_hash: null
    },
    body: '<p>The story started few years back</p>',
    createdAt: '2018-10-15T11:27:58.250Z',
    description: '<p>the description</p>',
    id: 71,
    readingTime: '1 min read',
    slug: 'new-article',
    title: 'new article',
    updatedAt: '2018-10-15T11:27:58.250Z',
    userId: 5

  },
  articleSlug: 'new-article',
  fetchReportCategories: jest.fn(),
  hideReportModal: jest.fn(),
  modal: 'report',
  postReport: {
    error: {},
    success: {},
  },
  reportArticle: jest.fn()
};

const initialState = {
  modal: {
    current: null,
  },
  postReport: {
    success: {},
    error: {}
  }
};
const store = mockStore(initialState);

describe('Report form', () => {
  it('should render Article page correctly', () => {
    const wrapper = shallow(<ReportForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onChange event', () => {
    const wrapper = shallow(<ReportForm {...props} />);
    const instance = wrapper.instance();
    wrapper.setState({
      categoryId: 1, details: 'new report here', errors: {}, isLoading: true,
    });
    instance.onSubmit();
    expect(props.fetchReportCategories).toHaveBeenCalled();
    expect(props.reportArticle).toHaveBeenCalled();
    expect(props.hideReportModal).toHaveBeenCalled();
  });
  it('should set error in the state with invalid credential', () => {
    const wrapper = shallow(<ReportForm {...props} />);
    wrapper.setState({
      categoryId: 1, details: '', error: { details: ['The details field is required.'] }
    });
    const instance = wrapper.instance();
    instance.onSubmit();
    expect(wrapper.state().error).toBeTruthy();
  });
  it('should call onChange event', () => {
    const event = {
      target: {
        name: 'categoryId',
        value: '1'
      }
    };
    const wrapper = shallow(<ReportForm {...props} />);
    const categoryId = wrapper.find('#selectText');
    categoryId.simulate('change', event);
    wrapper.setState({ errors: { [event.target.name]: 'mock' } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.name])
      .toBe(event.target.value);
  });
  it('should test connect ReportForm', () => {
    const wrapper = shallow(<DefaultReportForm store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
});
